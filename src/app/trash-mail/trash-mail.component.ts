import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-trash-mail',
  templateUrl: './trash-mail.component.html',
  styleUrls: ['./trash-mail.component.css']
})
export class TrashMailComponent implements OnInit{
  ngOnInit(): void {
    this.getTrash()
  }
  constructor(private api:ApiService){}
  

  allMail:any=[]

  getTrash(){
    this.api.getTrash().subscribe({
      next:(res:any)=>{
        this.allMail=res
        // console.log(res);
        
      },
      error:(err:any)=>{
        Swal.fire(err.error)
      }
    })
  }

  restore(mail:any){
    console.log(mail);
    if(mail.image){

      this.api.mail2(mail).subscribe({
        next:(res:any)=>{
          this.api.removetrash(mail._id).subscribe({
            next:(res:any)=>{
              this.getTrash()
              Swal.fire('Restored!')
            },
            error:(err:any)=>{
              Swal.fire(err.error)
            }
          })
          
        },
        error:(err:any)=>{
          Swal.fire('Couldnt restore!')
        }
      })
      
    }else{
      this.api.mail2(mail).subscribe({
        next:(res:any)=>{
          this.api.removetrash(mail._id).subscribe({
            next:(res:any)=>{
              Swal.fire('Restored!')
              this.getTrash()
            },
            error:(err:any)=>{
              Swal.fire(err.error)
            }
          })
          
        },
        error:(err:any)=>{
          Swal.fire('Couldnt restore!')
        }
      })
      
    }
    
  }

  deleteF(id:any){
    this.api.removetrash(id).subscribe({
      next:(res:any)=>{
        Swal.fire('Deleted !')
        this.getTrash()
      },
      error:(err:any)=>{
        Swal.fire(err.error)
      }
    })
  }
}
