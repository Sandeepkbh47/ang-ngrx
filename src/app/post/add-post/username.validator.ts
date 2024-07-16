import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export function usernameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value == null) {
      return null;
    }
    console.log('validator');
    return control.value.length < 6 ? { usernameValidator: true } : null;
  };
}
