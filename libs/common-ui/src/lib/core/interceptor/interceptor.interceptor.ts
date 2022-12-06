import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
): Observable<HttpEvent<unknown>> {
    const accessToken = localStorage.getItem('token');
    // const accessToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiYWxtdWt1bmQiLCJ0ZW5hbnRJZCI6ImQ3NDA4ZDMxLWQ3MjAtNDE3My1iNzZlLTA1OTVjZTI2NzliNCIsImV4cCI6MTY2MzgwMTY0MywiaWF0IjoxNjYyMDAxNjQzLCJqdGkiOiJCdXNpbmVzc1VzZXIifQ.b-QM2o6TxkLuqWZhRt8MJX7hn0QmD8IYCk4fZicvHmRD6vVuuCFAa3WuE_oq19vODflfjeiO66aBtirJ_F1AjA'
    if (accessToken) {
        request = request.clone({
            headers: new HttpHeaders({
                Authorization: 'Bearer ' + accessToken,
                // UserTimezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
                // UserTime: new Date().toISOString()
            })
        });
    }
    return next.handle(request);
}
}
