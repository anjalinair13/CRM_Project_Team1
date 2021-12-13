import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    //create an instance of resource
    formData: User = new User();
    users: User[];
    userId:number;

  constructor(private httpClient: HttpClient) { }

   //insert users
   insertUser(users: User): Observable<any> {
     console.log("before url",users);
     return this.httpClient.post(environment.apiUrl+'/api/user/adduser',users);
    //return this.httpClient.post(environment.apiUrl + "/api/user/adduser", users)
    //https://localhost:44355/api/user/adduser
  }

  //update resource
  updateUser(users: User): Observable<any> {
    return this.httpClient.put(environment.apiUrl + "/api/user/updateuser", users)
  }

  //get all resources
  bindListUsers() {
    this.httpClient.get(environment.apiUrl + "/api/user/getusers")
      .toPromise().then(response =>
        this.users = response as User[]
      );
     }
    //get resource by Id

    getUser(userId) : Observable < any > 
    {
      console.log("User id in get User is"+userId)
      return this.httpClient.get(environment.apiUrl + "/api/user/getuserbyid?id="+userId);
    }
}
