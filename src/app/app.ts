import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor } from './providers/interceptors/jwt.interceptor';
import { ErrorInterceptor } from './providers/interceptors/error.interceptor';

@Component({
  selector: 'app-root',
   imports: [
    RouterOutlet,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [	
		{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
	],
})
export class App {
  protected title = 'pc-app';
}
