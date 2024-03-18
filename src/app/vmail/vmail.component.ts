import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../service/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-vmail',
  templateUrl: './vmail.component.html',
  styleUrls: ['./vmail.component.css']
})
export class VmailComponent implements OnInit{
  ngOnInit(): void {
    this.route.params.subscribe((res:any)=>{
      const {id} = res
      this.getmail(id)
    })
    
  }
  constructor(private route:ActivatedRoute,private api:ApiService,private router:Router){}
mail:any=[]
pblank:string=''
// server='http://localhost:4321'
server='https://postbox-server.onrender.com'

  getmail(id:any){
    this.api.getSingleMail(id).subscribe({
      next:(res:any)=>{
        this.mail=res[0]
        // console.log(this.mail);
        if(this.mail.image){
          this.pblank = `${this.server}/uploads/${this.mail.image}`
        }
        if(this.mail.stat == "new"){
          this.mail.stat = "old"

          
          this.api.toUpdateStats(this.mail).subscribe({
            next:(res:any)=>{
              console.log('updated');
              
            },
            error:(err:any)=>{
              console.log(err.error);
              
            }
          })
        }
        
      },
      error:(err:any)=>{
        Swal.fire(err.error)
      }
    })
  }

  addImportant(message:any){
    this.api.addToimp(message).subscribe({
      next:(res:any)=>{
        Swal.fire(res)
      },
      error:(err:any)=>{
        Swal.fire(err.error)
      }
    })
    
  }

  addTrash(message:any){

    // console.log(message._id);
    this.api.delete(message._id).subscribe({
      next:(res:any)=>{
        this.api.addToTrash(message).subscribe({
          next:(res:any)=>{
            Swal.fire(res)
            this.router.navigateByUrl('')
          },
          error:(err:any)=>{
            Swal.fire(err.error)
          }
        })
            
          },
          error:(err:any)=>{
            Swal.fire(err.error)
          }
    })
    
    
  }

}
