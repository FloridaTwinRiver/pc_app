import { Injectable } from '@angular/core';
import { CanLoad, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrivacyGuard implements CanLoad {
  constructor(private router: Router) {}

  canLoad(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   // 实现你的隐私检查逻辑
  //   const acceptedPrivacyPolicy = localStorage.getItem('privacyAccepted');
    
  //   if (acceptedPrivacyPolicy) {
  //     return true;
  //   } else {
  //     // 重定向到隐私政策页面
  //     return this.router.parseUrl('/privacy-policy');
  //   }
  // }
  return true
  }
}