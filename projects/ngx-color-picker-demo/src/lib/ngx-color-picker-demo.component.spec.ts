import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxColorPickerDemoComponent } from './ngx-color-picker-demo.component';

describe('NgxColorPickerDemoComponent', () => {
  let component: NgxColorPickerDemoComponent;
  let fixture: ComponentFixture<NgxColorPickerDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxColorPickerDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxColorPickerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
