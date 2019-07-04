import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenUiComponent } from './screen-ui.component';
import { SharedModule } from '../../shared.module';

describe('ScreenUiComponent', () => {
  let component: ScreenUiComponent;
  let fixture: ComponentFixture<ScreenUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule
      ],
      declarations: [ScreenUiComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
