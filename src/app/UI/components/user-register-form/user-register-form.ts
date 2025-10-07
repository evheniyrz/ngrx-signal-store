import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChatMember } from '../../../core/root-store';
import { RegisterForm } from './models/form.interface';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatInput } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { minMaxLengthValidator, MyErrorStateMatcher, objectValueRequiredValidator } from './Utils';
import { GenerateIdService } from '../../../services/generate-id/generate-id';


@Component({
  selector: 'app-user-register-form',
  imports: [
    ReactiveFormsModule,
    MatFormField, MatSelect, MatInput, MatLabel, MatSelectModule, MatButtonModule, MatError],
  templateUrl: './user-register-form.html',
  styleUrl: './user-register-form.scss'
})
export class UserRegisterForm {
  #idGeneratorService = inject(GenerateIdService);
  matcher = new MyErrorStateMatcher();
  avatarSource = [
    {name: 'Businessman', url: 'free-icon-businessman-6998065.png'},
    {name: 'Einstein', url: 'free-icon-einstein-882991.png'},
    {name: 'Gamer', url: 'free-icon-gamer-4333609.png'},
    {name: 'Girl', url: 'free-icon-girl-201634.png'},
    {name: 'Girl with glasses', url: 'free-icon-girl-3371904.png'},
    {name: 'Hacker', url: 'free-icon-hacker-924915.png'},
  ];

  #fbldr = inject(FormBuilder).nonNullable;
  registerForm: FormGroup<RegisterForm> = this.#fbldr.group({
    nikName: this.#fbldr.control('', {validators:[Validators.required, minMaxLengthValidator(3,8)]}),
    avatar: this.#fbldr.control({name: '', url:''}, {validators:[Validators.required,objectValueRequiredValidator(['name', 'url'])]}),
    // uId: this.#fbldr.control('', {validators: [Validators.required]}),
  });

  patchIdInputControl(): void {
    // const uId = this.#idGeneratorService.generateID();
    // this.registerForm.controls.uId.patchValue(uId);
  }

}
