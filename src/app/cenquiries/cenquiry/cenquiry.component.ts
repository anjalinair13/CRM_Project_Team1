import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cenquiry } from 'src/app/shared/cenquiry';
import { CenquiryService } from 'src/app/shared/cenquiry.service';
import { DatePipe } from '@angular/common';
import { PagevisitService } from 'src/app/shared/pagevist.service';
import * as moment from 'moment/moment.js';

@Component({
  selector: 'app-cenquiry',
  templateUrl: './cenquiry.component.html',
  styleUrls: ['./cenquiry.component.css']
})
export class CenquiryComponent implements OnInit {

  CEnquiryId: number;
  cenquiry: Cenquiry = new Cenquiry();
  now = new Date();
  year = this.now.getFullYear();
  month = this.now.getMonth();
  day = this.now.getDay();
  minDate = moment({ year: this.year, month: this.month, day: this.day }).format('yyyy-MM-dd');
  maxDate = moment({ year: this.year, month: this.month, day: this.day }).format('yyyy-MM-dd');






  //injecting services
  constructor(public pagevisit: PagevisitService, public cenquiryService: CenquiryService, public toastrService: ToastrService, private route: ActivatedRoute) { }

  CourseId: number;




  //life-cycle hook
  ngOnInit(): void {
    this.cenquiryService.BindCmdQualification();
    this.cenquiryService.bindListCEnquiry();
    this.minDate = moment({year: this.year, month: this.month, day: this.day+13}).format('YYYY-MM-DD');

    this.maxDate = moment({year: this.year , month: this.month, day: this.day+13}).format('YYYY-MM-DD');

    this.UpdatePage();


    this.CourseId = this.route.snapshot.params['courseId'];
    console.log(this.CourseId);
    this.cenquiryService.formData.CourseId = this.CourseId;

    this.CEnquiryId = this.route.snapshot.params['CEnquiryId'];
    this.resetForm();


  }

  //onSubmit
  onSubmit(form: NgForm) {
    console.log(form.value);
    let addId = this.cenquiryService.formData.CourseEnquiryId;
    //insert
    if (addId == 0 || addId == null) {
      //insert with predefined values
      form.setValue({
        CourseEnquiryId: 0,
        Description: form.value.Description,
        EnquiryDate: form.value.EnquiryDate,
        CourseId: form.value.CourseId,
        Email: form.value.Email,
        AdminReply: null,
        AdminReplyDate: null,
        IsActive: 1,
        StatusId: 1,
        QualificationId: form.value.QualificationId,
        EnquirerName: form.value.EnquirerName,

      })
      console.log(form);
      this.insertCEnquiryRecord(form);
    }/*
    else {
      //update
      console.log("Updating record...");
      this.updateCEnquiryRecord(form);
      this.toastrService.success('Course Enquiry record has been updated', 'CRM');

    }*/
  }

  //clear all contents at initialization
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }

  //defining insert record
  insertCEnquiryRecord(form?: NgForm) {
    console.log("Inserting a record...");
    this.cenquiryService.insertCEnquiry(form.value).subscribe(
      (result) => {
        console.log(result);
        this.resetForm(form);

        this.toastrService.success("Course Enquiry record has been inserted", "CRM");

      }
    );
    window.location.reload();
  }


  UpdatePage() {
    this.pagevisit.UpdatePageCount(3);

  }

  /*defining update record
  updateCEnquiryRecord(form?: NgForm) {
    this.cenquiryService.updateCEnquiry(form.value).subscribe(
      (result) => {
        console.log(result);
        this.resetForm(form);
        this.toastrService.success("Course Enquiry record has been updated", "CRM");

       // this.toastrService.success("Course Enquiry record has been updated","CRM");

        this.cenquiryService.bindListCEnquiry();
      }
    );
    window.location.reload();
  }*/

}

