import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenFirebaseOrderComponent } from './screen-firebase-order.component';

describe('ScreenFirebaseOrderComponent', () => {
  let component: ScreenFirebaseOrderComponent;
  let fixture: ComponentFixture<ScreenFirebaseOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenFirebaseOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenFirebaseOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
