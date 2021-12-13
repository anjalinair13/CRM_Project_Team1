import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cenquiry } from 'src/app/shared/cenquiry';
import { CenquiryService } from 'src/app/shared/cenquiry.service';

@Component({
  selector: 'app-cenquiry-status',
  templateUrl: './cenquiry-status.component.html',
  styleUrls: ['./cenquiry-status.component.css']
})
export class CenquiryStatusComponent implements OnInit {
  status:number;
  statuscon:number;
  constructor(public cenquiryService: CenquiryService, private toastrService: ToastrService, 
    private router: Router,private route: ActivatedRoute, ) { }

  ngOnInit(): void {
    this.cenquiryService.bindListCEnquiry();
     this.status = this.route.snapshot.params['status'];
     if(this.status!= null){
      this.statusOf();
     }
   }

  //populate form by clicking the column fields
  populateForm(renquiry: Cenquiry)
  {
    console.log(renquiry);
    //date format
    var datePipe= new DatePipe("en-UK");
    let formatedDate:any=datePipe.transform(renquiry.EnquiryDate,'yyyy-MM-dd');
    renquiry.EnquiryDate=formatedDate;
    this.cenquiryService.formData=Object.assign({},renquiry);
  }

  statusOf(){
    this.status = this.route.snapshot.params['statusI'];
    console.log("statusoff",this.status);
      return this.status;
  }
  
}
