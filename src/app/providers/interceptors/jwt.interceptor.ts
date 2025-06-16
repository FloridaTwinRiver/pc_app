import { Injectable, isDevMode } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * This Interceptor will add bear token for every http request
 */
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
	/**
	 * Intercept Implementation
	 */
	intercept(
		request: HttpRequest<any>,
		next: HttpHandler,
	): Observable<HttpEvent<any>> {
		// add authorization header with jwt token if available
		const token = localStorage.getItem('user_jwt');
		let endPoint = window.location.origin + '/eamic/';

		console.log('interceptor', token, request.url);
		if (isDevMode()) {
			endPoint =
				window.location.protocol +
				'//' +
				window.location.hostname +
				':1280/eamic/';
		}

		if (token && token !== '' && request.url.substring(0, 3) === 'api') {
			request = request.clone({
				setHeaders: {
					Authorization: `Bearer ${token}`,
					'Content-Type': 'application/json',
				},
				url: endPoint + request.url,
			});
		} else if (request.url === 'api/v1/admin/basic_data') {
			request = request.clone({
				setHeaders: {
					'Content-Type': 'application/json',
				},
				url: endPoint + request.url,
			});
		}

		return next.handle(request);
	}
}
