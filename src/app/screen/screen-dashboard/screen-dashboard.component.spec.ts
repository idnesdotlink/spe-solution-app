import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedModule } from '../../shared.module';
import { ScreenDashboardComponent } from './screen-dashboard.component';
import { MatInputModule } from '@angular/material/input';

describe('ScreenDashboardComponent', () => {
  let component: ScreenDashboardComponent;
  let fixture: ComponentFixture<ScreenDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenDashboardComponent],
      imports: [MatInputModule, SharedModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
