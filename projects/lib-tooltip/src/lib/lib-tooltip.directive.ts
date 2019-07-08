import {
  ApplicationRef,
  Directive,
  HostListener,
  HostBinding,
  Input,
  ViewContainerRef,
  ElementRef,
  OnInit,
  Injector,
  OnDestroy,
  ComponentFactoryResolver
} from '@angular/core';
import { DomPortalHost, Portal, ComponentPortal, TemplatePortal } from '@angular/cdk/portal';
import { LibTooltipComponent } from './lib-tooltip.component';

@Directive({
  selector: '[libLibTooltip]'
})
export class LibTooltipDirective {

  @HostBinding('style.position') position = 'relative';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.show();
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.hide();
  }

  @Input('libLibTooltip')
  tooltipText: string;

  private tooltipPortalHost: DomPortalHost;
  private templatePortal: TemplatePortal<any>;

  constructor(
    private elementRef: ElementRef,
    private injector: Injector,
    private appRef: ApplicationRef,
    private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver,
  ) { }

  ngOnInit() {
    this.createContainerTemplate();
  }
  private createContainerTemplate() {
    this.tooltipPortalHost = new DomPortalHost(
      // Create the Portal Host on the parent element
      (this.elementRef.nativeElement as HTMLElement).parentElement,
      this.componentFactoryResolver,
      this.appRef,
      this.injector
    );

    const tooltipComponent = this.componentFactoryResolver.resolveComponentFactory(LibTooltipComponent);
    const tooltipComponentRef = tooltipComponent.create(this.injector);

    this.templatePortal = new TemplatePortal(
      tooltipComponentRef.instance.tooltip,
      this.viewContainerRef,
      {
        // Pass the tooltip text as $implicit so it's the
        // default variable for use within the templateRef
        $implicit: this.tooltipText,
      }
    );
  }

  private show() {
    if (!this.templatePortal.isAttached) {
      this.tooltipPortalHost.attach(this.templatePortal);
    }
  }

  private hide() {
    this.tooltipPortalHost.detach();
  }
}
