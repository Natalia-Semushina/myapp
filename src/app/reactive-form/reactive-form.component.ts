import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {identityRevealedValidator, PwdValidationDirective} from './pwd-validation.directive';
import get = Reflect.get;

// function retypePassword (c: AbstractControl): any {
//   if (!c.parent || !c) return;
//   const pwd = c.parent.get('password');
//   const cpwd = c.parent.get('confirm_password');
//
//   if(!pwd || !cpwd) return ;
//   if (pwd.value !== cpwd.value) {
//   return { invalid: true };
//   }
// }

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],

})
export class ReactiveFormComponent implements OnInit {

  regForm: FormGroup;
  constructor(private fb: FormBuilder) { // <--- inject FormBuilder
    this.createForm();
  }
  createForm() {
    this.regForm = this.fb.group({
      email : ['', Validators.required],
      username: ['', Validators.required ],
      password: ['', Validators.required],
      retypePassword:   ['', Validators.required]
      }, {validator: this.matchValidator});

  }
  matchValidator(group: FormGroup) {

    const pass = group.get('password').value;
    const retypePass = group.get('retypePassword').value;
    return pass === retypePass ? null : {notSame: true};
  }
  ngOnInit() {

  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
     console.log(this.regForm.value);
  }

}
