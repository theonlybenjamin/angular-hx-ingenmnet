import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { LoginPort } from './domain/ports/login/login.port';
import { LoginAdapter } from './infraestructure/adapters/login.adapter';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { OrderPort } from './domain/ports/order/order.port';
import { OrderAdapter } from './infraestructure/adapters/order.adapter';
import { accessTokenInterceptor } from './infraestructure/interceptors/access-token.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([accessTokenInterceptor])),
    provideRouter(routes),
    provideAnimationsAsync(),
    {
      provide: LoginPort,
      useClass: LoginAdapter
    },
    {
      provide: OrderPort,
      useClass: OrderAdapter
    },
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'es-PE'
    }
  ]
};
