import { NgModule } from '@angular/core';
import { LibTooltip2Component } from './lib-tooltip2.component';
import { Tooltip2Directive } from './tooltip2.directive';
import { AwesomeTooltipDirective } from './awesome-tooltip.directive';
import { AwesomeTooltipComponent } from './awesome-tooltip/awesome-tooltip.component';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [LibTooltip2Component, Tooltip2Directive, AwesomeTooltipDirective, AwesomeTooltipComponent],
  imports: [
    PortalModule, OverlayModule
  ],
  entryComponents: [AwesomeTooltipComponent],
  exports: [LibTooltip2Component]
})
export class LibTooltip2Module { }
