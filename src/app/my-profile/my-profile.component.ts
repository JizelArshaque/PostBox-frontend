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
  server='http://localhost:4321'
  statu:boolean=false 
  

  

  getImage(event:any){
    const setfile:File = event.target.files[0]
    this.dets['image']=setfile
    const setfile1:File = event.target.files[0]
    let fr=new FileReader()
    fr.readAsDataURL(setfile1)
    fr.onload=(event:any)=>{
    this.profblank=event.target.result
    }
    this.statu=true


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
    sessionStorage.removeItem('email')
    this.router.navigateByUrl('')
    window.location.reload()

  }
  getdetails(){
    const email = sessionStorage.getItem('email')    
    this.api.getdetails(email).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.dets=res
        // console.log(this.dets);
        // this.profblank=`${this.server}/uploads/${this.dets.image}`
        
        
        if(this.dets.image){
          this.profblank=`${this.server}/uploads/${this.dets.image}` 
          console.log(this.dets.image);
          
        }else{
          this.profblank='./assets/blankprofile.jpg'
        }
        
  
      },
      error:(err:any)=>{
        Swal.fire('only error')
      }
    })
    
  }
  update(){
    // console.log(this.dets);
    // this.dets['image']=this.profblank

    if(this.statu){
    console.log(this.dets);

    const reqbod = new FormData()
    reqbod.append('_id',this.dets._id)
    reqbod.append('email',this.dets.email)
    reqbod.append('username',this.dets.username)
    reqbod.append('password',this.dets.password)
    reqbod.append('image',this.dets.image)
    
    this.api.userupdate(reqbod).subscribe({
      next:(res:any)=>{
        Swal.fire('updated Successfully!')
        this.logs = false

      },
      error:(err:any)=>{
        Swal.fire('couldnt save atm!')
      }
    })

    }else{
      this.api.userupdate2(this.dets).subscribe({
        next:(res:any)=>{
          Swal.fire('Updated Successfuly!')
        },
        error:(err:any)=>{
          Swal.fire('couldnt save atm!')
        }
      })
    }

    
    
  }





}
