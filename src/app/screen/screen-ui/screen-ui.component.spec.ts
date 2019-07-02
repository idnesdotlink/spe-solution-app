import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenUiComponent } from './screen-ui.component';

describe('ScreenUiComponent', () => {
  let component: ScreenUiComponent;
  let fixture: ComponentFixture<ScreenUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
