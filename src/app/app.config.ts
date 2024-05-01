import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { LoginPort } from './domain/ports/login/login.port';
import { LoginAdapter } from './infraestructure/adapters/login.adapter';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideAnimationsAsync(),
    {
      provide: LoginPort,
      useClass: LoginAdapter
    }
  ]
};
