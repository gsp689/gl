import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private cookieService: CookieService) {}

  public isAuthenticated(): boolean {
    const userData = localStorage.getItem('userData');
    if (userData) return true;
    return false;
  }
}
