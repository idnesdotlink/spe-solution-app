import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibQrcodeComponent } from './lib-qrcode.component';

describe('LibQrcodeComponent', () => {
  let component: LibQrcodeComponent;
  let fixture: ComponentFixture<LibQrcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibQrcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibQrcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
