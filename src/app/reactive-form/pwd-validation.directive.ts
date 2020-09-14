import { Directive } from '@angular/core';
import {AbstractControl, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

@Directive({
  selector: '[appPwdValidation]'
})
export class PwdValidationDirective {

  constructor() { }

}
// export function forbiddenPwdValidator(pwdRe: RegExp): ValidatorFn {
//   return (control: AbstractControl): {[key: string]: any} | null => {
//     const forbidden = pwdRe.test(control.value);
//     return forbidden ? {forbiddenPwd: {value: control.value}} : null;
//   };
// }
export const identityRevealedValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password = control.get('password');
  const retypePassword = control.get('retypePassword');

  return password && retypePassword && password.value === retypePassword.value ? { identityRevealed: true } : null;
};
