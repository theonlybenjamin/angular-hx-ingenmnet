import { ApplicationConfig, InjectionToken } from '@angular/core';
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
import { DocumentTypesPort } from './domain/ports/types-document/document-types.port';
import { DocumentTypesAdapter } from './infraestructure/adapters/document-types.adapter';
import { ProductPort } from './domain/ports/products/product.port';
import { ProductoAdapter } from './infraestructure/adapters/product.adapter';

export const DOCUMENT_TYPES_TOKEN = new InjectionToken<DocumentTypesPort>('DOCUMENT_TYPES_TOKEN');
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
      provide: ProductPort,
      useClass: ProductoAdapter
    },
    {
      provide: DOCUMENT_TYPES_TOKEN,
      useClass: DocumentTypesAdapter
    },
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'es-PE'
    }
  ]
};
