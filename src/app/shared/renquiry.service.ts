import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Renquiry } from './renquiry';
import { Qualification } from './qualification';
import { Status } from './status';

@Injectable({
  providedIn: 'root'
})
export class RenquiryService {
  //create an instance
  formData: Renquiry = new Renquiry();
  renquiries: Renquiry[];
  REnquiryId:number;
  qualifications:Qualification[];
  statuses:Status[];
  
    constructor(private httpClient: HttpClient) { }

    BindCmdQualification(){
      this.httpClient.get(environment.apiUrl+"/api/course/GetQualifications")
      .toPromise().then(response=>
        this.qualifications=response as Qualification[]);
    }
  
    BindCmdStatus(){
      this.httpClient.get(environment.apiUrl+"/api/course/GetStatus")
      .toPromise().then(response=>
        this.statuses=response as Status[]);
    }
  
  
    //binding customer data to get
    bindListREnquiry()
    {
      this.httpClient.get(environment.apiUrl+"/api/enquiry/GetResourceEnquiry")
      .toPromise().then(response=>
        this.renquiries=response as Renquiry[]);
    }
    //insert
    insertREnquiry(renquiry: Renquiry): Observable<any>
    {
      return this.httpClient.post(environment.apiUrl + "/api/enquiry/AddResourceEnquiry",renquiry);
    }
    //update
    updateREnquiry(renquiry:Renquiry):Observable<any>
    {
      return this.httpClient.put(environment.apiUrl+ "/api/enquiry/UpdateResourceEnquiry",renquiry);
    }
    //get a particular resource enquiry
    getREnquiry(REnquiryId:number):Observable<any>{
      return this.httpClient.get(environment.apiUrl+"/api/enquiry/GetREnquiryById?id="+REnquiryId);
    }
  }
  