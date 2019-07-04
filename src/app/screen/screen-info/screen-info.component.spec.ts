import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenInfoComponent } from './screen-info.component';
import { SharedModule } from '../../shared.module';

describe('ScreenInfoComponent', () => {
  let component: ScreenInfoComponent;
  let fixture: ComponentFixture<ScreenInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ScreenInfoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
