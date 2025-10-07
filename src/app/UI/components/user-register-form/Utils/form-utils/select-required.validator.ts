import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function objectValueRequiredValidator(keys: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const selectValue: Record<string, string> = control.value;
    const matchFields = keys.filter(
      key => typeof selectValue[key] === 'string' &&
        selectValue[key].normalize().trim().length > 0
    );
    return matchFields.length == keys.length ? null : { required: true };
  }
}