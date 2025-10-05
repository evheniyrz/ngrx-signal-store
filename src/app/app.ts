import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NGRX_SIGNAL_STORE } from './core/root-store';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  
  // readonly store = inject(NGRX_SIGNAL_STORE);

  ngOnInit(): void {
    // this.store
  }
}
