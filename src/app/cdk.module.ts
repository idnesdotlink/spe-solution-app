import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PlatformModule } from '@angular/cdk/platform';

const modules = [
  PlatformModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ...modules
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ...modules
  ]
})
export class CdkModule { }
