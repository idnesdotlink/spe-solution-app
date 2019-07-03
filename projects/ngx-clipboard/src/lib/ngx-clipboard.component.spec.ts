import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxClipboardComponent } from './ngx-clipboard.component';

describe('NgxClipboardComponent', () => {
  let component: NgxClipboardComponent;
  let fixture: ComponentFixture<NgxClipboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxClipboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxClipboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
