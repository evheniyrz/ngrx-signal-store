import { Component, inject } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatFormField, MatInput } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat-room',
  imports: [ MatInput, MatIconButton, MatIconModule, MatFormField, ReactiveFormsModule],
  templateUrl: './chat-room.html',
  styleUrl: './chat-room.scss'
})
export class ChatRoom {
  #fbg = inject(FormBuilder).nonNullable;
  messageForm = this.#fbg.group({
    message: this.#fbg.control('', Validators.required)
  })
}
