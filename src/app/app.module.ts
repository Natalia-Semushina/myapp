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
import { PassComponent } from './pass/pass.component';
import { NgxHideDirective } from './ngx-hide.directive';

@NgModule({
  declarations: [
    AppComponent,
    PassComponent,
    NgxHideDirective
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatSliderModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
