import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutBaseComponent } from './layout-base.component';
import { NavDevComponent } from '../nav-dev/nav-dev.component';
import { MaterialModule } from '../../../material.module';

describe('LayoutBaseComponent', () => {
  let component: LayoutBaseComponent;
  let fixture: ComponentFixture<LayoutBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavDevComponent, LayoutBaseComponent],
      imports: [MaterialModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
