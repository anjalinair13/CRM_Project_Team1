import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Resource } from './resource';
@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  //create an instance of resource
  formData: Resource = new Resource();
  resources: Resource[];
  resourceId:number;

  constructor(private httpClient: HttpClient) { }

  //insert resource
  insertResource(resources: Resource): Observable<any> {
    return this.httpClient.post(environment.apiUrl + "/api/resource/addresource", resources)
  }

  //update resource
  updateResource(resources: Resource): Observable<any> {
    return this.httpClient.put(environment.apiUrl + "/api/resource/updateresource", resources)
  }

  //get all resources
  bindListResources() {
    this.httpClient.get(environment.apiUrl + "/api/resource/getresources")
      .toPromise().then(response =>
        this.resources = response as Resource[]
      );
     }
    //get resource by Id

    getResource(resourceId) : Observable < any > 
    {
      console.log("resource id in get resource is"+resourceId)
      return this.httpClient.get(environment.apiUrl + "/api/resource/getresourcebyid?id="+resourceId);
    }
  
}
