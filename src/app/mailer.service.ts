import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailerService {

  constructor(private http:HttpClient) { }

  sentMail(mail:any):Observable<any>{
    console.log("Mailing,,",mail);
    return this.http.post("http://localhost:5000/mail",mail);
  }

  
}
