import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import {TemplateDrivingFormComponent} from './template-driving-form.component';



@NgModule({
  declarations: [TemplateDrivingFormComponent],
  exports: [
    TemplateDrivingFormComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    MatInputModule,
    NoopAnimationsModule,
    MatCheckboxModule,
    FlexLayoutModule,
    MatButtonModule

  ]
})
export class TemplateDrivingFormModule { }
