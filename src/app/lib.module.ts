import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartLibModule } from 'chart-lib';
import { NgxChartsModule } from 'ngx-charts';
import { ColorPickerLibModule } from 'color-picker-lib';
import { MarkdownModule } from 'ngx-markdown';
import { NgxColorPickerModule } from 'ngx-color-picker';
import { NgxColorPickerDemoModule } from 'ngx-color-picker-demo';
import { ClipboardModule } from 'ngx-clipboard';
import { NgxClipboardDemoModule } from 'ngx-clipboard-demo';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxChartsModule,
    ChartLibModule,
    ColorPickerLibModule,
    MarkdownModule.forRoot(),
    NgxColorPickerModule,
    NgxColorPickerDemoModule,
    ClipboardModule,
    NgxClipboardDemoModule
  ],
  exports: [
    NgxChartsModule,
    ChartLibModule,
    ColorPickerLibModule,
    MarkdownModule,
    NgxColorPickerModule,
    NgxColorPickerDemoModule,
    ClipboardModule,
    NgxClipboardDemoModule
  ]
})
export class LibModule { }
