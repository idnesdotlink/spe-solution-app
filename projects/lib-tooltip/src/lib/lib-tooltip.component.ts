import { Component, OnInit, ViewChild, TemplateRef, ViewEncapsulation } from '@angular/core';

@Component({
  template: `
  <ng-template #tooltip let-tooltipText>
      <span class="tooltip">{{ tooltipText }}</span>
  </ng-template>`,
  styles: [
    `
      .tooltip {
        position: absolute;
        color:red;
        top: 20px;
        left: 20px;
      }
    `
  ],
  encapsulation: ViewEncapsulation.None
})
export class LibTooltipComponent implements OnInit {

  @ViewChild('tooltip', { static: true }) tooltip: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

}
