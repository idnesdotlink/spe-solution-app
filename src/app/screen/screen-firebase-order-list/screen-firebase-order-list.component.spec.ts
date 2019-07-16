import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenFirebaseOrderListComponent } from './screen-firebase-order-list.component';

describe('ScreenFirebaseOrderListComponent', () => {
  let component: ScreenFirebaseOrderListComponent;
  let fixture: ComponentFixture<ScreenFirebaseOrderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenFirebaseOrderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenFirebaseOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
