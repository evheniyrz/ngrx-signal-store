import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ChatMember } from '../../../core/root-store';
import { RegisterForm } from './models/form.interface';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { MatInput } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-user-register-form',
  imports: [
    ReactiveFormsModule,
    MatFormField, MatSelect, MatInput, MatLabel, MatSelectModule, MatButtonModule],
  templateUrl: './user-register-form.html',
  styleUrl: './user-register-form.scss'
})
export class UserRegisterForm {
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
    nikName: this.#fbldr.control(''),
    avatar: this.#fbldr.control({name: '', url:''}),
    uId: this.#fbldr.control(''),
  })

}
