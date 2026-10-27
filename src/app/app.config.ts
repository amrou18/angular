import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
<<<<<<< HEAD
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
=======
import { provideRouter } from '@angular/router';
>>>>>>> b103470507732669cf9be8f27885f96e724464fe

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
<<<<<<< HEAD
    provideRouter(routes, withComponentInputBinding()),
    // indispensable pour injecter HttpClient dans ConferanceService
    provideHttpClient(),
=======
    provideRouter(routes)
>>>>>>> b103470507732669cf9be8f27885f96e724464fe
  ]
};
