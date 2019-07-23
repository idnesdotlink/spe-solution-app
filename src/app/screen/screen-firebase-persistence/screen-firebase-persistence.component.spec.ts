import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenFirebasePersistenceComponent } from './screen-firebase-persistence.component';

describe('ScreenFirebasePersistenceComponent', () => {
  let component: ScreenFirebasePersistenceComponent;
  let fixture: ComponentFixture<ScreenFirebasePersistenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenFirebasePersistenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenFirebasePersistenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
