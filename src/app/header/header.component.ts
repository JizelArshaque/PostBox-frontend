import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(private router:Router,private api:ApiService){}
  ngOnInit(): void {
    this.log()
  }
  islog:boolean=false

  log(){
    const stat=sessionStorage.getItem('token')
    if(stat){
      this.islog=true
    }else{
      this.islog=false
    }
  }



  logout(){
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('email')
    this.router.navigateByUrl('')

  }

}
