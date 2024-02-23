import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sent',
  templateUrl: './sent.component.html',
  styleUrls: ['./sent.component.css']
})
export class SentComponent implements OnInit{
  ngOnInit(): void {
    const from = sessionStorage.getItem('email')
    console.log(from);
    
    this.getsent(from)
  }

  constructor(private api:ApiService){}
  allMail:any=[]

  getsent(from:any){
    this.api.sent(from).subscribe({
      next:(res:any)=>{
        this.allMail=res
        console.log(this.allMail);
        
      },
      error:(err:any)=>{
        Swal.fire('Couldnt get the mails at the moment!')
      }
    })
  }

}
