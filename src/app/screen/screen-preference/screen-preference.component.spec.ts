import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenPreferenceComponent } from './screen-preference.component';
import { SharedModule } from '../../shared.module';

describe('ScreenPreferenceComponent', () => {
  let component: ScreenPreferenceComponent;
  let fixture: ComponentFixture<ScreenPreferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ScreenPreferenceComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
