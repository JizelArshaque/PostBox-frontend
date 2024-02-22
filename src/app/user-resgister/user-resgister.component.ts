import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-user-resgister',
  templateUrl: './user-resgister.component.html',
  styleUrls: ['./user-resgister.component.css']
})
export class UserResgisterComponent {
  constructor(private api:ApiService,private fb:FormBuilder,private router:Router){}

  registerForm = this.fb.group({
    username:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9@$&]*')]]
  })

  registerUser(){
    if(this.registerForm.valid){
      const username = this.registerForm.value.username
      const email = this.registerForm.value.email
      const password = this.registerForm.value.password
      const user = {username , email , password}

      this.api.registerUserApi(user).subscribe({
        next:(res:any)=>{
          Swal.fire({
            title: res,
            icon: "success"
          });
          this.router.navigateByUrl('')
        },
        error:(err:any)=>{
          Swal.fire({
            title: err.error,
            icon: "error"
          });
      }
    })

    }else{
      Swal.fire(
        {
          title: 'please fill the form Properly!',
          icon: "error"
        }
      )
    }
    

    
    

  }

  

}
