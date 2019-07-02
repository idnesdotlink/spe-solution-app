import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { CdkModule } from './cdk.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormLoginComponent } from './shared/components/form-login/form-login.component';
import { BrandLogoComponent } from './shared/components/brand-logo/brand-logo.component';
import { DynamicFormComponent } from './shared/components/dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './shared/components/dynamic-form-question/dynamic-form-question.component';

import { RouterModule } from '@angular/router';
import { LayoutBaseComponent } from './shared/components/layout-base/layout-base.component';
import { NavDevComponent } from './shared/components/nav-dev/nav-dev.component';
import { SampleChartBarComponent } from './shared/sample/sample-chart-bar/sample-chart-bar.component';
import { LibModule } from './lib.module';

@NgModule({
  declarations: [
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    FormLoginComponent,
    BrandLogoComponent,
    LayoutBaseComponent,
    NavDevComponent,
    SampleChartBarComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialModule,
    CdkModule,
    LibModule
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    CdkModule,
    LibModule,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
    FormLoginComponent,
    BrandLogoComponent,
    LayoutBaseComponent,
    NavDevComponent,
    SampleChartBarComponent
  ],
})
export class SharedModule { }
