import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagevisitService } from '../shared/pagevist.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router :Router,private pagevisit:PagevisitService) { }

  ngOnInit(): void {
    this.UpdatePage();
  }

  UpdatePage()
  {
   this.pagevisit.UpdatePageCount(1);

  }

}
