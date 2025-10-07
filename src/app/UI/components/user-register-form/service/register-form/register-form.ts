import { Injectable } from '@angular/core';
import { RegisterFormValue } from '../../models/form.interface';

@Injectable()
export abstract class AbstractRegisterFormService {
  abstract sendFormData(formValue: RegisterFormValue): void;
}
