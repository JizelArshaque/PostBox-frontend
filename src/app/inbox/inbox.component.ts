import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit{
  ngOnInit(): void {
    const to = sessionStorage.getItem('email')
    this.getmail(to)
  }
p:number=1
allMail:any=[]
constructor(private api:ApiService){}

getmail(to:any){
  this.api.getInbox(to).subscribe({
    next:(res:any)=>{
      this.allMail=res
      console.log(this.allMail);
      
    },
    error:(err:any)=>{
      Swal.fire('No Messages yet!')
    }
  })
}
}
