import { NgModule } from '@angular/core';
import { NgxColorPickerDemoComponent } from './ngx-color-picker-demo.component';
import { NgxColorPickerModule } from 'ngx-color-picker';

@NgModule({
  declarations: [NgxColorPickerDemoComponent],
  imports: [
    NgxColorPickerModule
  ],
  exports: [NgxColorPickerDemoComponent]
})
export class NgxColorPickerDemoModule { }
