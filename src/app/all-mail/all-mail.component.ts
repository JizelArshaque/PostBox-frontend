import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-mail',
  templateUrl: './all-mail.component.html',
  styleUrls: ['./all-mail.component.css']
})
export class AllMailComponent implements OnInit{
  ngOnInit(): void {
    this.em = sessionStorage.getItem('email')
    this.getallmail(this.em)
  }


  constructor(private api:ApiService){}
  allMail:any=[]
  p:number=1
  em:any=""

  getallmail(frm:any){
    this.api.allmailget(frm).subscribe({
      next:(res:any)=>{

        res.sort((a:any, b:any) => {
          const dateA = new Date(a.dateTime);
          const dateB = new Date(b.dateTime);
          return dateB.getTime() - dateA.getTime();
      });
      
      // Display sorted messages
      res.forEach((message:any) => {
          console.log(`${message.name} (${message.dateTime}): ${message.message}`);
      });
        this.allMail=res
        console.log(this.allMail);        
      },
      error:(err:any)=>{
        Swal.fire('Theres an error please try reloading the page after logging in again!')
      }
    })
  }

}
