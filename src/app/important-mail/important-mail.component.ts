import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-important-mail',
  templateUrl: './important-mail.component.html',
  styleUrls: ['./important-mail.component.css']
})
export class ImportantMailComponent implements OnInit{
  ngOnInit(): void {
    this.getmail()
  }
   constructor(private api:ApiService){}
   allMail:any=[]

   getmail(){
    this.api.getImp().subscribe({
      next:(res:any)=>{
        this.allMail=res
        console.log(res);
        
      },
      error:(err:any)=>{
        Swal.fire(err.error)
      }
    })
   }
}
