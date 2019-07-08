import { NgModule } from '@angular/core';
import { LibTooltipComponent } from './lib-tooltip.component';
import { LibTooltipDirective } from './lib-tooltip.directive';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';


@NgModule({
  declarations: [LibTooltipComponent, LibTooltipDirective],
  imports: [
    OverlayModule, PortalModule
  ],
  entryComponents: [LibTooltipComponent],
  exports: [LibTooltipComponent, LibTooltipDirective]
})
export class LibTooltipModule { }
