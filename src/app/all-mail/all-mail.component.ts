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
    const em = sessionStorage.getItem('email')
    this.getallmail(em)
  }


  constructor(private api:ApiService){}
  allMail:any=[]
  p:number=1

  getallmail(frm:any){
    this.api.allmailget(frm).subscribe({
      next:(res:any)=>{
        this.allMail=res
        console.log(this.allMail);        
      },
      error:(err:any)=>{
        Swal.fire('Theres an error please try reloading the page after logging in again!')
      }
    })
  }

}
