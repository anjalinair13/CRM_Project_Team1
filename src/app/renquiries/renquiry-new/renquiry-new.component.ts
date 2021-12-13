import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Renquiry } from 'src/app/shared/renquiry';
import { RenquiryService } from 'src/app/shared/renquiry.service';

@Component({
  selector: 'app-renquiry-new',
  templateUrl: './renquiry-new.component.html',
  styleUrls: ['./renquiry-new.component.css']
})
export class RenquiryNewComponent implements OnInit {
  //assign default page
  page: number=1;
  filter: string;

  constructor(public renquiryService:RenquiryService,private router:Router,
    private toastrService: ToastrService) { }

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

    deleteEnquiry(res: Renquiry) {
      console.log(res);
      // console.log(res.CourseName);
      var value = confirm("Are you sure to delete ?");
      if (value) {
        console.log("Deleting a record!!");
        res.IsActive = false;
        console.log(res);
        this.renquiryService.updateREnquiry(res).subscribe(
          (result) => {
            console.log(result);
            this.renquiryService.bindListREnquiry();
          });
        this.toastrService.warning("Enquiry deleted!", 'Training App');
      }
      else {
        //this.toastrService.info("Employee " + id + " deleted!", 'TrainingApp');
      }
    }
  
   
      //update resource enquiry
      updateREnquiry(REnquiryId: number,res:Renquiry)
    {
      console.log(REnquiryId);
      res.IsActive = false;
    console.log(res);
    this.renquiryService.updateREnquiry(res).subscribe(
      (result) => {
        console.log(result);
        this.renquiryService.bindListREnquiry();
      });
      //this.router.navigate(['renquiry',{REnquiryId}]);
      //this.router.navigateByUrl('/renquiryedit;RenquiryId');
      this.router.navigate(['renquiryedit',{REnquiryId}]);
    }
}
