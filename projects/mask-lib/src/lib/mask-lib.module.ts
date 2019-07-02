import { NgModule } from '@angular/core';
import { MaskLibComponent } from './mask-lib.component';
import { MaskLibDirective } from './mask-lib.directive';
import { MaskLibPipe } from './mask-lib.pipe';

@NgModule({
  declarations: [MaskLibComponent, MaskLibDirective, MaskLibPipe],
  imports: [
  ],
  exports: [MaskLibComponent]
})
export class MaskLibModule { }
