import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxClipboardDemoComponent } from './ngx-clipboard-demo.component';

describe('NgxClipboardDemoComponent', () => {
  let component: NgxClipboardDemoComponent;
  let fixture: ComponentFixture<NgxClipboardDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxClipboardDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxClipboardDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
