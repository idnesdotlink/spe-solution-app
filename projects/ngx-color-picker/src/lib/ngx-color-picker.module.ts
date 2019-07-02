import { NgModule } from '@angular/core';
import { NgxColorPickerComponent } from './ngx-color-picker.component';
import { NgxColorPickerDirective } from './ngx-color-picker.directive';
import { NgxColorPickerService } from './ngx-color-picker.service';
import { TextDirective } from './text.directive';
import { SliderDirective } from './slider.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NgxColorPickerComponent, NgxColorPickerDirective, TextDirective, SliderDirective],
  imports: [
    CommonModule
  ],
  providers: [NgxColorPickerService],
  exports: [NgxColorPickerDirective],
  entryComponents: [NgxColorPickerComponent]
})
export class NgxColorPickerModule { }
