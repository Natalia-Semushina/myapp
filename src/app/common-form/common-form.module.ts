import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PassComponent} from '../pass/pass.component';



@NgModule({
  declarations: [PassComponent],
  exports: [
    PassComponent
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
export class CommonFormModule { }
