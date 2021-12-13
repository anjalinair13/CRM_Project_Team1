import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Cenquiry} from './cenquiry';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Qualification } from './qualification';
import { Status } from './status';
@Injectable({
  providedIn: 'root'
})
export class CenquiryService {

  //create an instance
  formData: Cenquiry = new Cenquiry();
  cenquiries: Cenquiry[];
  CEnquiryId:number;
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


  //binding course enquiry data to get
  bindListCEnquiry()
  {
    this.httpClient.get(environment.apiUrl+"/api/enquiry/GetCourseEnquiry")
    .toPromise().then(response=>
      this.cenquiries=response as Cenquiry[]);
  }
  //insert
  insertCEnquiry(cenquiry: Cenquiry): Observable<any>
  {
    return this.httpClient.post(environment.apiUrl + "/api/Enquiry/AddCourseEnquiry",cenquiry);
  }
  //update
  updateCEnquiry(cenquiry:Cenquiry):Observable<any>
  {
    return this.httpClient.put(environment.apiUrl+ "/api/Enquiry/UpdateCourseEnquiry",cenquiry);
  }
  //get a particular course enquiry
  getCEnquiry(CEnquiryId):Observable<any>{
    console.log("Value in service",CEnquiryId)
    return this.httpClient.get(environment.apiUrl+"/api/Enquiry/GetCEnquiryById?id="+CEnquiryId);
  }
  
}
