import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenGraphqlComponent } from './screen-graphql.component';

describe('ScreenGraphqlComponent', () => {
  let component: ScreenGraphqlComponent;
  let fixture: ComponentFixture<ScreenGraphqlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenGraphqlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenGraphqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
