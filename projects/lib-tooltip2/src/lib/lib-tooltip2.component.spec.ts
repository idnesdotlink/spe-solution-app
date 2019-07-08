import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibTooltip2Component } from './lib-tooltip2.component';

describe('LibTooltip2Component', () => {
  let component: LibTooltip2Component;
  let fixture: ComponentFixture<LibTooltip2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibTooltip2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibTooltip2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
