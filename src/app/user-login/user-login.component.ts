import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{
  ngOnInit(): void {
    if(sessionStorage.getItem('token')){
      this.router.navigateByUrl('/allmail')
    }
  }
  constructor(private api:ApiService,private fb:FormBuilder,private router:Router){}

  loginForm = this.fb.group({
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9@$&]*')]]
  })
  
  login(){
    if(this.loginForm.valid){
      const email = this.loginForm.value.email
      const password = this.loginForm.value.password
      const user = { email , password }

      this.api.loginApi(user).subscribe({
        next:(res:any)=>{
          sessionStorage.setItem('email',res.existingUser.email)
          sessionStorage.setItem('username',res.existingUser.username)
          sessionStorage.setItem('token',res.token)
          Swal.fire({
            title: 'login Successful!',
            icon: "success"
          });
          
          
          this.router.navigateByUrl('/allmail')
        },
        error:(err:any)=>{
          Swal.fire({
            title: err.error,
            icon: "error"
          });
        }
      })


    }else{
      Swal.fire({
        title:'Please fill the form Properly!',
        icon:'error'
      })
    }
  }

}
