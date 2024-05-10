import { HttpInterceptorFn } from '@angular/common/http';

export const accessTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const headers = req.headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`);
  req = req.clone({ headers });
  return next(req);
};
