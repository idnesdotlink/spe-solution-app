import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'layout-base',
  templateUrl: './layout-base.component.html',
  styleUrls: ['./layout-base.component.scss']
})
export class LayoutBaseComponent implements OnInit {

  @Input() layoutTitle: string;

  constructor() { }

  ngOnInit() {
  }

}
