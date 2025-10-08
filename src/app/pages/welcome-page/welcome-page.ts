import { Component } from '@angular/core';
import { WelcomePageContent } from '../../UI/components/welcome-page-content/welcome-page-content';
import { UserRegisterForm } from '../../UI/components/user-register-form/user-register-form';

@Component({
  selector: 'app-welcome-page',
  imports: [ UserRegisterForm],
  templateUrl: './welcome-page.html',
  styleUrl: './welcome-page.scss'
})
export class WelcomePage {

}
