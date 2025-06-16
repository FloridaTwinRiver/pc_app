import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.scss'],
  standalone: false,
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.error = '';

    if (this.loginForm.invalid) {
      return;
    }

    // 这里替换为实际的登录逻辑
    if (
      this.f['username'].value === 'admin' &&
      this.f['password'].value === 'admin123'
    ) {
      // 登录成功，跳转到主页
      this.router.navigate(['/dashboard']);
    } else {
      this.error = '用户名或密码错误';
    }
  }

  login(obj: any): any {
    console.log(obj);
      const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Referrer-Policy', 'no-referrer-when-downgrade');

    this.http
      .post<any>('http://127.0.0.1/api_test/log_jwt/login', obj,{ headers })
      .subscribe((r) => {
        console.log(r);
      });
  }
}
