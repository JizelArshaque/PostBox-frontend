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
    return this.http.get(`${this.server}/sentmail/${from}`,this.addTokenToHeaders())
  }

  // get all mail 
  allmailget(id:any){
    return this.http.get(`${this.server}/all/mail/${id}`,this.addTokenToHeaders())
  }

  getSingleMail(id:any){
    return this.http.get(`${this.server}/get/mail/${id}`,this.addTokenToHeaders())
  }

  addToimp(message:any){
    return this.http.post(`${this.server}/add/important`,message,this.addTokenToHeaders())
  }

  getImp(){
    return this.http.get(`${this.server}/get/imp`,this.addTokenToHeaders())
  }

  getsingleImp(id:any){
    return this.http.get(`${this.server}/getimp/single/${id}`)

  }

  removeImp(id:any){
    return this.http.delete(`${this.server}/delete/imp/${id}`)
  }

  delete(id:any){
    return this.http.delete(`${this.server}/delete/mail/${id}`)
  }

  addToTrash(message:any){
    return this.http.post(`${this.server}/add/trash`,message,this.addTokenToHeaders())
  }

  getTrash(){
    return this.http.get(`${this.server}/get/trash`,this.addTokenToHeaders())
  }

  removetrash(id:any){
    return this.http.delete(`${this.server}/delete/trash/${id}`)
  }



}
