import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibTooltipComponent } from './lib-tooltip.component';

describe('LibTooltipComponent', () => {
  let component: LibTooltipComponent;
  let fixture: ComponentFixture<LibTooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibTooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
