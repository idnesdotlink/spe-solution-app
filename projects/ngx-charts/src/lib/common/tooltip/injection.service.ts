import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  Injectable,
  Injector,
  EmbeddedViewRef,
  Type,
  Renderer2
} from '@angular/core';

/**
 * Injection service is a helper to append components
 * dynamically to a known location in the DOM, most
 * noteably for dialogs/tooltips appending to body.
 *
 */
@Injectable()
export class InjectionService {
  static globalRootViewContainer: ComponentRef<any> = null;

  /**
   * Sets a default global root view container. This is useful for
   * things like ngUpgrade that doesn't have a ApplicationRef root.
   *
   */
  static setGlobalRootViewContainer(container: ComponentRef<any>): void {
    InjectionService.globalRootViewContainer = container;
  }

  private _container: ComponentRef<any>;

  constructor(
    private applicationRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) { }

  /**
   * Gets the root view container to inject the component to.
   *
   *
   */
  getRootViewContainer(): ComponentRef<any> {
    const rootComponents = this.applicationRef.components;

    // fix cannot read length of undefined
    if (rootComponents) {
      if (rootComponents.length) return rootComponents[0];
    }

    if (this._container) return this._container;
    if (InjectionService.globalRootViewContainer) return InjectionService.globalRootViewContainer;

    throw new Error('View Container not found! ngUpgrade needs to manually set this via setRootViewContainer.');
  }

  /**
   * Overrides the default root view container. This is useful for
   * things like ngUpgrade that doesn't have a ApplicationRef root.
   *
   *
   */
  setRootViewContainer(container): void {
    this._container = container;
  }

  /**
   * Gets the html element for a component ref.
   *
   *
   */
  getComponentRootNode(componentRef: any): HTMLElement {
    // the top most component root node has no `hostView`
    if (!componentRef.hostView) return componentRef.element.nativeElement;

    return (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
  }

  /**
   * Gets the root component container html element.
   *
   *
   */
  getRootViewContainerNode(): HTMLElement {
    return this.getComponentRootNode(this.getRootViewContainer());
  }

  /**
   * Projects the bindings onto the component
   *
   *
   */
  projectComponentBindings(component: ComponentRef<any>, bindings: any): ComponentRef<any> {
    if (bindings) {
      if (bindings.inputs !== undefined) {
        const bindingKeys = Object.getOwnPropertyNames(bindings.inputs);
        for (const bindingName of bindingKeys) {
          component.instance[bindingName] = bindings.inputs[bindingName];
        }
      }

      if (bindings.outputs !== undefined) {
        const eventKeys = Object.getOwnPropertyNames(bindings.outputs);
        for (const eventName of eventKeys) {
          component.instance[eventName] = bindings.outputs[eventName];
        }
      }
    }

    return component;
  }

  /**
   * Appends a component to a adjacent location
   *
   *
   */
  appendComponent<T>(
    componentClass: Type<T>,
    bindings: any = {},
    location: Element = this.getRootViewContainerNode()
  ): ComponentRef<any> {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentClass);
    const componentRef: any = componentFactory.create(this.injector);
    const appRef: any = this.applicationRef;
    const componentRootNode = this.getComponentRootNode(componentRef);

    // project the options passed to the component instance
    this.projectComponentBindings(componentRef, bindings);

    appRef.attachView(componentRef.hostView);

    componentRef.onDestroy(() => {
      appRef.detachView(componentRef.hostView);
    });

    // use the renderer to append the element for univseral support
    const renderer: Renderer2 = componentRef.instance.renderer;
    renderer.appendChild(location, componentRootNode);

    return componentRef;
  }
}
