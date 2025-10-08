import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AbstractRegisterFormService } from './UI/components/user-register-form/service/register-form/register-form';
import { FormStoreConnectorService } from './services/form-store-connector-service/form-store-connector-service';
import { FullscreenOverlayContainer, OverlayContainer } from '@angular/cdk/overlay';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync('animations'),
    {
      provide: AbstractRegisterFormService,
      useClass: FormStoreConnectorService
    },
    {provide: OverlayContainer, useClass: FullscreenOverlayContainer}
  ]
};
