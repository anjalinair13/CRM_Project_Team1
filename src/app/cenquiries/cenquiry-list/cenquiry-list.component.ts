import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Cenquiry } from 'src/app/shared/cenquiry';
import { CenquiryService } from 'src/app/shared/cenquiry.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cenquiry-list',
  templateUrl: './cenquiry-list.component.html',
  styleUrls: ['./cenquiry-list.component.css']
})
export class CenquiryListComponent implements OnInit {
  //assign default page
  page: number = 1;
  filter: string;

  constructor(public cenquiryService: CenquiryService, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    //get all course enquiry through service
    this.cenquiryService.bindListCEnquiry();
  }
  //populate form by clicking the column fields
  populateForm(cenquiry: Cenquiry) {
    console.log(cenquiry);
    //date format
    var datePipe = new DatePipe("en-UK");
    let formatedDate: any = datePipe.transform(cenquiry.EnquiryDate, 'yyyy-MM-dd');
    cenquiry.EnquiryDate = formatedDate;
    this.cenquiryService.formData = Object.assign({}, cenquiry);
  }

  deleteEnquiry(res: Cenquiry) {
    console.log(res);
    // console.log(res.CourseName);
    var value = confirm("Are you sure to delete ?");
    if (value) {
      console.log("Deleting a record!!");
      res.IsActive = false;
      console.log(res);
      this.cenquiryService.updateCEnquiry(res).subscribe(
        (result) => {
          console.log(result);
          this.cenquiryService.bindListCEnquiry();
        });
      this.toastrService.warning("Enquiry deleted!", 'Training App');
    }
    else {
      //this.toastrService.info("Employee " + id + " deleted!", 'TrainingApp');
    }
  }

  //update course enquiry

  updateCEnquiry(CEnquiryId: number,res: Cenquiry) {
    res.IsActive = false;
    console.log(res);
    this.cenquiryService.updateCEnquiry(res).subscribe(
      (result) => {
        console.log(result);
        this.cenquiryService.bindListCEnquiry();
      });
    //this.toastrService.warning("Enquiry deleted!", 'Training App');
    console.log("navigating to edit",CEnquiryId);
    //this.router.navigate(['cenquiry',{CEnquiryId}]);
     this.router.navigate(['cenquiryedit',{CEnquiryId}]);
    
     //his.router.navigateByUrl('/cenquiryedit;CEnquiryId=CEnquiryId');
  }
}
