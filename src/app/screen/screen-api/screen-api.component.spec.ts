import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenApiComponent } from './screen-api.component';
import { SharedModule } from '../../shared.module';

describe('ScreenApiComponent', () => {
  let component: ScreenApiComponent;
  let fixture: ComponentFixture<ScreenApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [ScreenApiComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
