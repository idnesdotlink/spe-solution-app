import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaskLibComponent } from './mask-lib.component';

describe('MaskLibComponent', () => {
  let component: MaskLibComponent;
  let fixture: ComponentFixture<MaskLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MaskLibComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaskLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
