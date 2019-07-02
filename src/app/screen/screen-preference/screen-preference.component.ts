import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'screen-preference',
  templateUrl: './screen-preference.component.html',
  styleUrls: ['./screen-preference.component.scss']
})
export class ScreenPreferenceComponent implements OnInit {

  @Input() sval: any = 0;

  constructor() { }

  ngOnInit() {
  }

}
