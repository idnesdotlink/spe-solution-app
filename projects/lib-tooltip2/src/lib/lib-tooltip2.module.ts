import { NgModule } from '@angular/core';
import { AwesomeTooltipDirective } from './awesome-tooltip.directive';
import { AwesomeTooltipComponent } from './awesome-tooltip/awesome-tooltip.component';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [AwesomeTooltipDirective, AwesomeTooltipComponent],
  imports: [
    PortalModule, OverlayModule
  ],
  entryComponents: [AwesomeTooltipComponent],
  exports: [AwesomeTooltipDirective]
})
export class LibTooltip2Module { }
