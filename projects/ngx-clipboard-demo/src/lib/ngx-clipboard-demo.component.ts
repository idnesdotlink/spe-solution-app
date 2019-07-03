import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'lib-ngx-clipboard-demo',
  templateUrl: 'ngx-clipboard-demo.component.html',
  styles: []
})
export class NgxClipboardDemoComponent implements OnInit {

  ngOnInit() {
  }

  text1: string;
  text2: string;
  textModal: string;
  isCopied1: boolean;
  isCopied2: boolean;
  isCopied3: boolean;
  basic = false;
  constructor(private _clipboardService: ClipboardService) { }

  callServiceToCopy() {
    this._clipboardService.copyFromContent('This is copy thru service copyFromContent directly');
  }

  onCopyFailure() {
    alert('copy fail!');
  }

}
