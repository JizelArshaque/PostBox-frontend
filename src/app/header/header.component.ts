import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
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

}
