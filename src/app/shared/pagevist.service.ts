import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pagevisit } from './pagevist';

@Injectable({
  providedIn: 'root'
})
export class PagevisitService {
  pagevisit: Pagevisit[];
  pageId:number;
  test:any;
  constructor(private httpClient: HttpClient) { }

  bindListPageVisit() {
    this.httpClient.get(environment.apiUrl + "/api/pagevisit/GetPageVisit")
      .toPromise().then(response =>
        this.pagevisit = response as Pagevisit[]
      );
     }
     
     UpdatePageCount(pageId)
     {
       console.log("demo",pageId);//,pageId);
        this.httpClient.get("https://localhost:44355/api/pagevisit/UpdatePageVisit?id="+pageId)
        .toPromise().then(response => this.test= response as any);
        //return null;
      //"/api/pagevisit/UpdatePageVisit?id="+pageId);https://localhost:44355/api/pagevisit/updatepagevisit?id=1
    }

     /* Updatedemo(pagename:string){
        this.http.put(environment.apiUrl + "/api/pagevisit/UpdatePageVisit?pageName=" + pagename,null).map(
          (response) => {
            return response;
      }*/
     
}
