import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
 loggedUserName:string;
 statusI:number;
  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.loggedUserName=localStorage.getItem("username");
  }
  logout()
  {
    sessionStorage.removeItem("jwtToken");
    localStorage.removeItem("ACCESS_ROLE");
    this.authService.logout();
    this.router.navigateByUrl('login');
  }
  Interested(statusI){
    this.router.navigate(['cenquirystatus',{statusI}]);
  }
  ResourceStatus(statusI){
    this.router.navigate(['renquirystatus',{statusI}]);
  }
}
