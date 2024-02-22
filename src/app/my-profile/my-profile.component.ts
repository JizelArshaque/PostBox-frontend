import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit{
  ngOnInit(): void {
    this.getdetails()
    
  }
  constructor(private router:Router,private api:ApiService){}

  logs:boolean=false

  profblank:String='./assets/blankprofile.jpg'
  uname:string=''
  upass:string=''
  uemail:string=''
  dets:any={}

  

  getImage(event:any){
    let setfile = event.target.files[0]
    let fr=new FileReader()
    fr.readAsDataURL(setfile)
    fr.onload=(event:any)=>{
    this.profblank=event.target.result
    }
  }

  edit(){
    this.logs = true
  }
  cancel(){
    this.logs= false
  }
  
  logout(){
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('username')
    this.router.navigateByUrl('')

  }
  getdetails(){
    const email = sessionStorage.getItem('email')    
    this.api.getdetails(email).subscribe({
      next:(res:any)=>{
        this.dets=res
        this.profblank=this.dets.image  
  
      },
      error:(err:any)=>{
        Swal.fire('only error')
      }
    })
    
  }
  update(){
    // console.log(this.dets);
    this.dets['image']=this.profblank
    console.log(this.dets);
    
    this.api.userupdate(this.dets).subscribe({
      next:(res:any)=>{
        Swal.fire('updated Successfully!')
        this.logs = false

      },
      error:(err:any)=>{
        Swal.fire('couldnt save atm!')
      }
    })
    
  }





}
