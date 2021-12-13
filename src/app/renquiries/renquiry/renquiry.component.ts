import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CourseService } from 'src/app/shared/course.service';
import { PagevisitService } from 'src/app/shared/pagevist.service';
import { Renquiry } from 'src/app/shared/renquiry';
import { RenquiryService } from 'src/app/shared/renquiry.service';
import { Resource } from 'src/app/shared/resource';
import * as moment from 'moment/moment.js';

@Component({
  selector: 'app-renquiry',
  templateUrl: './renquiry.component.html',
  styleUrls: ['./renquiry.component.css']
})
export class RenquiryComponent implements OnInit {
  REnquiryId: number;
  renquiry: Renquiry = new Renquiry();
  ResourceId: number;
  resourceK:Resource;
  now = new Date();
  year = this.now.getFullYear();
  month = this.now.getMonth();
  day = this.now.getDay();
  minDate = moment({ year: this.year, month: this.month, day: this.day }).format('yyyy-MM-dd');
  maxDate = moment({ year: this.year, month: this.month, day: this.day }).format('yyyy-MM-dd');

  constructor(public renquiryService: RenquiryService, private route: ActivatedRoute, private router: Router,
    private toastrService: ToastrService, public pagevisit: PagevisitService, public courseService: CourseService) { }

  ngOnInit(): void {
    this.ResourceId = this.route.snapshot.params['resouceId'];
    console.log(this.ResourceId);
    //this.formBind(this.ResourceId);
    //this.resourceK=this.courseService.getCourse(this.ResourceId);
    this.renquiryService.formData.ResourceId = this.ResourceId;
    this.renquiryService.BindCmdQualification();
    this.renquiryService.bindListREnquiry();
    this.minDate = moment({year: this.year, month: this.month, day: this.day+13}).format('YYYY-MM-DD');

    this.maxDate = moment({year: this.year , month: this.month, day: this.day+13}).format('YYYY-MM-DD');
    this.UpdatePage();

    this.REnquiryId = this.route.snapshot.params['REnquiryId'];
    this.resetForm();
    /*
    if(this.REnquiryId!=0 || (this.REnquiryId!=null))
   {
    this.renquiryService.getREnquiry(this.REnquiryId).subscribe(
      data=>{console.log(data);
       var datePipe= new DatePipe("en-UK");
     let formatedDate:any=datePipe.transform(data.EnquiryDate,'yyyy-MM-dd');
     data.EnquiryDate=formatedDate
     this.renquiryService.formData=Object.assign({},data);
     },
     error=>console.log(error)
    );
   }*/
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    let addId = this.renquiryService.formData.ResourceEnquiryId;
    //insert
    if (addId == 0 || addId == null) {
      form.setValue({
        ResourceEnquiryId: 0,
        Description: form.value.Description,
        EnquiryDate: form.value.EnquiryDate,
        ResourceId: form.value.ResourceId,
        Email: form.value.Email,
        AdminReply: null,
        AdminReplyDate: null,
        IsActive: 1,
        StatusId: 1,
        //QualificationId:form.value.QualificationId,
        EnquirerName: form.value.EnquirerName,

      })
      this.insertREnquiryRecord(form);
    }/*
    else
    {
      //update
      console.log("Updating record...");
      this.updateREnquiryRecord(form);
      this.toastrService.success('Resource Enquiry record has been updated','CRM');

    }*/
  }
  //clear all contents at initialization
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }
  UpdatePage() {
    this.pagevisit.UpdatePageCount(5);

  }
  //defining insert record
  insertREnquiryRecord(form?: NgForm) {
    console.log("Inserting a record...");
    this.renquiryService.insertREnquiry(form.value).subscribe(
      (result) => {
        console.log(result);
        this.resetForm(form);
        this.toastrService.success("Course Enquiry record has been inserted", "CRM");

      }
    );
    window.location.reload();
  }
  //formBind(ResourceId: number) {
    //resourceK = this.courseService.getCourse(ResourceId);
  //}
  /*defining update record
  updateREnquiryRecord(form?:NgForm)
  {
    this.renquiryService.updateREnquiry(form.value).subscribe( 
    (result)=>{
      console.log(result);
      this.resetForm(form);
      this.toastrService.success("Resource Enquiry record has been updated","CRM");
      this.renquiryService.bindListREnquiry();
    }
    );
    window.location.reload();
  }*/


}
