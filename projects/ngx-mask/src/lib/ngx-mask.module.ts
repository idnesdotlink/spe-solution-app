import { NgModule } from '@angular/core';
import { NgxMaskComponent } from './ngx-mask.component';
import { ApplierDirective } from './applier.directive';
import { MaskPipe } from './mask.pipe';
import { MaskDirective } from './mask.directive';

@NgModule({
  declarations: [NgxMaskComponent, ApplierDirective, MaskPipe, MaskDirective],
  imports: [
  ],
  exports: [NgxMaskComponent]
})
export class NgxMaskModule { }
