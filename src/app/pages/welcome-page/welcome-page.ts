import { Component } from '@angular/core';
import { WelcomePageContent } from '../../UI/components/welcome-page-content/welcome-page-content';

@Component({
  selector: 'app-welcome-page',
  imports: [WelcomePageContent],
  templateUrl: './welcome-page.html',
  styleUrl: './welcome-page.scss'
})
export class WelcomePage {

}
