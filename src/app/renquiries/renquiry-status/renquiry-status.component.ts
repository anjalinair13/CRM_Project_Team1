import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Renquiry } from 'src/app/shared/renquiry';
import { RenquiryService } from 'src/app/shared/renquiry.service';

@Component({
  selector: 'app-renquiry-status',
  templateUrl: './renquiry-status.component.html',
  styleUrls: ['./renquiry-status.component.css']
})
export class RenquiryStatusComponent implements OnInit {

  status:number;
  statuscon:number;
  constructor(public renquiryService: RenquiryService, private toastrService: ToastrService, 
    private router: Router,private route: ActivatedRoute, ) { }

  ngOnInit(): void {
    this.renquiryService.bindListREnquiry();
  }

  //populate form by clicking the column fields
  populateForm(renquiry: Renquiry)
  {
    console.log(renquiry);
    //date format
    var datePipe= new DatePipe("en-UK");
    let formatedDate:any=datePipe.transform(renquiry.EnquiryDate,'yyyy-MM-dd');
    renquiry.EnquiryDate=formatedDate;
    this.renquiryService.formData=Object.assign({},renquiry);
  }

  statusOf(){
    this.status = this.route.snapshot.params['statusI'];
    console.log("statusoff",this.status);
      return this.status;
  }

}
