import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  // user updateion with image
  userupdate(user:any){
    return this.http.put(`${this.server}/update/user`,user)
  }

  // without image updation
  userupdate2(user:any){
    return this.http.put(`${this.server}/update/user2`,user)
  }

  addTokenToHeaders(){
    let headers = new HttpHeaders()
    const token = sessionStorage.getItem("token")
    if(token){
      headers = headers.append('Authorization',`Bearer ${token}`)
    }
    return {headers}
  }

  // regular email w image
  mail1(details:any){
    return this.http.post(`${this.server}/send/mail1`,details,this.addTokenToHeaders())
  }
  // regular email
  mail2(details:any){
    return this.http.post(`${this.server}/send/mail2`,details,this.addTokenToHeaders())
  }

  // getting sent mail
  sent(from:any){
    return this.http.get(`${this.server}/sentmail/${from}`)
  }
}
