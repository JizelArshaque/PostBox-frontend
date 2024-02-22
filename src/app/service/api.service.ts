import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http:HttpClient) { }
  

  server='http://localhost:4321'

  // user registration
  registerUserApi(user:any){
    return this.http.post(`${this.server}/register/user`,user)
  }

  // userlogin
  loginApi(user:any){
    return this.http.post(`${this.server}/login/user`,user)
  }

  // getting details only
  getdetails(user:any){
    return this.http.get(`${this.server}/get/details/${user}`)
  }

  // user updateion
  userupdate(user:any){
    return this.http.put(`${this.server}/update/user`,user)

  }
}
