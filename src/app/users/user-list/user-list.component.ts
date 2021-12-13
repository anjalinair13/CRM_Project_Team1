
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
//assign default page
page: number=1;
filter: string;
  constructor(public userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.userService.bindListUsers();
  }
  //populate form by clicking the column fields
  populateForm(user: User)
  {
    console.log(user);   
    this.userService.formData=Object.assign({},user);
  }
 
    //update user
    updateUser(UserId: number)
  {
    console.log(UserId);
    this.router.navigate(['user',UserId]);
  }
}
