import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(private router:Router,private api:ApiService){}
  ngOnInit(): void {
    this.getLoginDetails()
    this.log()
  }
  islog:boolean=false
  profblank:String='./assets/blankprofile.jpg'
  dets:any={}
  server='http://localhost:4321'

  log(){
    const stat=sessionStorage.getItem('token')
    if(stat){
      this.islog=true
    }else{
      this.islog=false
    }
  }

  getLoginDetails(){
    const email = sessionStorage.getItem('email')
    this.api.getdetails(email).subscribe({
      next:(res:any)=>{
        this.dets=res
        this.profblank=`${this.server}/uploads/${this.dets.image}`

      },
      error:(err:any)=>{
        Swal.fire('Please Login!')
      }

    })
  }

  logout(){
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('email')
    this.router.navigateByUrl('')

  }

}
