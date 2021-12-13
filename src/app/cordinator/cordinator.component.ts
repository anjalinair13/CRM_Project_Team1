import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-cordinator',
  templateUrl: './cordinator.component.html',
  styleUrls: ['./cordinator.component.css']
})
export class CordinatorComponent implements OnInit {
  loggedUserName:string;

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.loggedUserName=localStorage.getItem("username");
  }

  logout()
  {
    this.authService.logout();
    this.router.navigateByUrl('login');
  }

}
