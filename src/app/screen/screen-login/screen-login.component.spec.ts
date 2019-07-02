import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '../../shared.module';
import { ScreenLoginComponent } from './screen-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ScreenLoginComponent', () => {
  let component: ScreenLoginComponent;
  let fixture: ComponentFixture<ScreenLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenLoginComponent],
      imports: [BrowserAnimationsModule, SharedModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
