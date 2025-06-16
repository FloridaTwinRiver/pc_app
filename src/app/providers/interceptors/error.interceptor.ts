import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

/**
 * This Interceptor deals with the http response which status code is not 200
 */
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
	/**
	 * Inject DialogsService to display dialog
	 */
	constructor() {}

	/**
	 * Intercept Implementation
	 */
	intercept(
		request: HttpRequest<any>,
		next: HttpHandler,
	): Observable<HttpEvent<any>> {
		return next.handle(request).pipe(
			catchError((err) => {

				if (request.url.includes('no_error=true')) {
					return next.handle(request);
				}

				alert(err);

				const error = err.error.message || err.statusText;
				return throwError(error);
			}),
		);
	}
}
