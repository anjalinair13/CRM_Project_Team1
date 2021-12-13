import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MailerService } from 'src/app/mailer.service';
import { Renquiry } from 'src/app/shared/renquiry';
import { RenquiryService } from 'src/app/shared/renquiry.service';
import * as moment from 'moment/moment.js';

@Component({
  selector: 'app-renquiry-edit',
  templateUrl: './renquiry-edit.component.html',
  styleUrls: ['./renquiry-edit.component.css']
})
export class RenquiryEditComponent implements OnInit {
  CEnquiryId: number;
  cenquiry: Renquiry = new Renquiry();
  now = new Date();
  year = this.now.getFullYear();
  month = this.now.getMonth();
  day = this.now.getDay();
  minDate = moment({ year: this.year, month: this.month, day: this.day }).format('yyyy-MM-dd');
  maxDate = moment({ year: this.year, month: this.month, day: this.day }).format('yyyy-MM-dd');

  constructor(public renquiryService: RenquiryService, private route: ActivatedRoute,public mailer:MailerService, 
    private router: Router,
    private toastrService: ToastrService) { }

  ngOnInit(): void {

    this.renquiryService.BindCmdStatus();
    this.renquiryService.BindCmdQualification();
    this.renquiryService.bindListREnquiry();
    this.minDate = moment({year: this.year, month: this.month, day: this.day+13}).format('YYYY-MM-DD');

    this.maxDate = moment({year: this.year , month: this.month, day: this.day+13}).format('YYYY-MM-DD');

    this.CEnquiryId = this.route.snapshot.params['REnquiryId'];
    //this.resetForm();
    if (this.CEnquiryId != 0 || this.CEnquiryId != null) {

      this.renquiryService.getREnquiry(this.CEnquiryId).subscribe(
        (data:any): void => {
          console.log(data);
          var datePipe = new DatePipe("en-UK");
          let formatedDate: any = datePipe.transform(data.EnquiryDate, 'yyyy-MM-dd');
          data.EnquiryDate = formatedDate
          this.renquiryService.formData = Object.assign({}, data);
        },
        error => console.log(error)
      );
    }
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    //mailing
    console.log("Mailing record...");
    this.mailer.sentMail(form.value).subscribe(
      (res) =>{
        console.log("Res..",res);
      }
    );
    //update
    console.log("Updating record...");
    this.updateCEnquiryRecord(form);
    //this.toastrService.success('Course Enquiry record has been updated', 'CRM');
  }

  //clear all contents at initialization
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }

  //defining update record
  updateCEnquiryRecord(form?: NgForm) {
    this.renquiryService.updateREnquiry(form.value).subscribe(
      (result) => {
        console.log(result);
        this.resetForm(form);
        this.toastrService.success("Course Enquiry record has been updated", "CRM");

       // this.toastrService.success("Course Enquiry record has been updated","CRM");

        this.renquiryService.bindListREnquiry();
      }
    );
   // window.location.reload();
  }


}
