import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-v-impmail',
  templateUrl: './v-impmail.component.html',
  styleUrls: ['./v-impmail.component.css']
})
export class VImpmailComponent implements OnInit{
  ngOnInit(): void {
    this.route.params.subscribe((res:any)=>{
      const {id} = res
      this.getmail(id)
    })
  }

  constructor(private api:ApiService,private route:ActivatedRoute,private router:Router){}

  pblank:string=''
  server='http://localhost:4321'

  mail:any={}
  getmail(id:any){
    this.api.getsingleImp(id).subscribe({
      next:(res:any)=>{
        this.mail=res[0]
        console.log(this.mail);
        if(this.mail.image){
          this.pblank = `${this.server}/uploads/${this.mail.image}`
        }
      },
      error:(err:any)=>{
        Swal.fire(err.error)
      }
    })
  }

  delete(id:any){
    this.api.removeImp(id).subscribe({
      next:(res:any)=>{
        this.router.navigateByUrl('/important')
      },
      error:(err:any)=>{
        Swal.fire(err.error)
      }
    })

  }

}
