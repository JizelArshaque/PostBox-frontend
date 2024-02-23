import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sendmail',
  templateUrl: './sendmail.component.html',
  styleUrls: ['./sendmail.component.css']
})
export class SendmailComponent {
  constructor(private fb:FormBuilder,private api:ApiService, private router:Router){}

  mailform = this.fb.group({
    to:['',[Validators.required,Validators.email]],
    subject:['',[Validators.required]],
    message:['',[Validators.required]]
  })
  mail:any={}
  imageF:any=[]
  image(event:any){
    const setfile:File = event.target.files[0]
    this.imageF['image']=setfile
  }

  send(){    
    if(this.mailform.valid){
      if(this.imageF.image){
          this.mail['from']=sessionStorage.getItem('email')
          this.mail['to']=this.mailform.value.to
          this.mail['subject']=this.mailform.value.subject
          this.mail['message']=this.mailform.value.message
          let d = new Date() 
          let date = d.toLocaleString(undefined,
              { timeZone: 'Asia/Kolkata' });
          this.mail['date']=date
          this.mail['image']=this.imageF.image
          const reqbody= new FormData()
          reqbody.append('from',this.mail.from)
          reqbody.append('to',this.mail.to)
          reqbody.append('subject',this.mail.subject)
          reqbody.append('message',this.mail.message)
          reqbody.append('date',this.mail.date)
          reqbody.append('image',this.mail.image)
          this.api.mail1(reqbody).subscribe({
          next:(res:any)=>{
            Swal.fire('Mail Sent!')
            this.router.navigateByUrl('/allmail')
          },
          error:(err:any)=>{
            Swal.fire('Could not send the mail')
          }
        })
      }else{ 
        const from = sessionStorage.getItem('email')
        const to = this.mailform.value.to
        const subject = this.mailform.value.subject
        const message = this.mailform.value.message
        let d = new Date() 
        let date = d.toLocaleString(undefined,
          { timeZone: 'Asia/Kolkata' });
        const mail = {from ,to,subject, message, date }
          
        this.api.mail2(mail).subscribe({
          next:(res:any)=>{
            Swal.fire('Mail Sent!')
            this.router.navigateByUrl('/allmail')
          },
          error:(err:any)=>{
            Swal.fire('Could not send the mail')
          }
          })
      }
    }else{
      Swal.fire('Not enough details to send a Mail!')
    }
  }

}
