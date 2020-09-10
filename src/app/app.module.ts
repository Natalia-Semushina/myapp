import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { NgxHideDirective } from './ngx-hide.directive';
import { StructuralNgxHideDirective } from './structural-ngx-hide.directive';
import {CommonFormModule} from './common-form/common-form.module';
import {MatButtonModule} from '@angular/material/button';
import {TemplateDrivingFormComponent} from './template-driving-form/template-driving-form.component';
import {TemplateDrivingFormModule} from './template-driving-form/templateDrivingForm.module';


const modules = [
  CommonFormModule,
  TemplateDrivingFormModule
];

@NgModule({
  declarations: [
    AppComponent,
    NgxHideDirective,
    StructuralNgxHideDirective,


  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatSliderModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule,
    modules,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
