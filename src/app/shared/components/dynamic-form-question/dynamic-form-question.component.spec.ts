import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

describe('DynamicFormQuestionComponent', () => {
  let component: DynamicFormComponent;
  let fixture: ComponentFixture<DynamicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicFormQuestionComponent, DynamicFormComponent],
      imports: [CommonModule, ReactiveFormsModule],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
