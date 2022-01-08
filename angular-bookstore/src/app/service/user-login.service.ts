import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserLoginService {
  constructor(private http: HttpClient) {}

  public doLogin(user: any) {
    return this.http.post('http://localhost:8080/api/v1/login', user, {
      responseType: 'text' as 'json',
    });
  }
}
