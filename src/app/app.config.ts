import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { LoginPort } from './domain/ports/login/login.port';
import { LoginAdapter } from './infraestructure/adapters/login.adapter';
import { MAT_DATE_LOCALE } from '@angular/material/core';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideAnimationsAsync(),
    {
      provide: LoginPort,
      useClass: LoginAdapter
    },
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'es-PE'
    }
  ]
};
