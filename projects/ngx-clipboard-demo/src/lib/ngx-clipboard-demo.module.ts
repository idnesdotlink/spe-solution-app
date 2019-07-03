import { NgModule } from '@angular/core';
import { NgxClipboardDemoComponent } from './ngx-clipboard-demo.component';
import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [NgxClipboardDemoComponent],
  imports: [
    ClipboardModule
  ],
  exports: [NgxClipboardDemoComponent]
})
export class NgxClipboardDemoModule { }
