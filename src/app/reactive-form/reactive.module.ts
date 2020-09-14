import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormComponent} from './reactive-form.component';
import {PwdValidationDirective} from './pwd-validation.directive';




@NgModule({
  declarations: [PwdValidationDirective, ReactiveFormComponent],
  exports: [
    ReactiveFormComponent,
    PwdValidationDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    MatInputModule,
    NoopAnimationsModule,
    MatCheckboxModule,
    FlexLayoutModule,
    MatButtonModule,
    ReactiveFormsModule

  ]
})
export class ReactiveModule { }
