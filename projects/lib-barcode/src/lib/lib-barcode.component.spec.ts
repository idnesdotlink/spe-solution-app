import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibBarcodeComponent } from './lib-barcode.component';

describe('LibBarcodeComponent', () => {
  let component: LibBarcodeComponent;
  let fixture: ComponentFixture<LibBarcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibBarcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibBarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
