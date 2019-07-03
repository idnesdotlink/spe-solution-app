import { NgModule } from '@angular/core';
import { NgxClipboardDemoComponent } from './ngx-clipboard-demo.component';
import { ClipboardModule } from 'ngx-clipboard';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NgxClipboardDemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    ClipboardModule
  ],
  exports: [NgxClipboardDemoComponent]
})
export class NgxClipboardDemoModule { }
