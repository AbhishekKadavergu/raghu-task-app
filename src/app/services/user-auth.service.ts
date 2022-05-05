import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  apiURL="http://localhost:3000"

  constructor(private http: HttpClient) { }

  userLogin(email:string, password:string) {

    return this.http.post<any>(this.apiURL+"/users/login", {
      "email": email,
      "password": password
    }).toPromise()
  }
  
}
