import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function minMaxLengthValidator(minLength: number, maxLength: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value.normalize().trim();
    if (value.length > maxLength) return { maxlength: true };
    if (value.length < minLength) return { minlength: true };
    return null;
  }
}