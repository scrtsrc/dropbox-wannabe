import { AbstractControl, ValidatorFn } from '@angular/forms';

export function matchPasswordValidator(): ValidatorFn {
  return (repeatPW: AbstractControl): { [key: string]: any } => {
    const formGroup = repeatPW.parent;
    if (formGroup) {
      const password = formGroup.get('password');
      return password.value !== repeatPW.value ? {'no-match': {value: repeatPW.value}} : null;
    }
    return null;
  };
}
