import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-template-driving-form',
  templateUrl: './template-driving-form.component.html',
  styleUrls: ['./template-driving-form.component.scss']
})
export class TemplateDrivingFormComponent implements OnInit {

  constructor() { }
  password = '';
  isHide = true;
  loginForm: any = {
    login: '',
    password: ''
  };

  login = new FormControl('', [Validators.required, Validators.email]);
  submitted = false;
  Hide = true;


  ngOnInit(): void {
  }
  printForm(): void{
    console.log(this.loginForm);
  }
  getErrorMessage()  {
    if (this.login.hasError('required')) {
      return 'You must enter a value';
    }

    return this.login.hasError('email') ? 'Not a valid email' : '';

  }

  onSubmit() {
    this.submitted = true;
  }
}
