import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/shared/user';
import { UserService } from 'src/app/shared/user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public userService: UserService, private route: ActivatedRoute, private router: Router,
    private toastrService: ToastrService) { }
  UserId: number;
  user: User = new User();
  ngOnInit(): void {
    this.UserId = this.route.snapshot.params['UserId'];

    this.userService.bindListUsers();

    if (this.UserId != 0 || (this.UserId != null)) {
      this.userService.getUser(this.UserId).subscribe(
        data => {
          console.log(data);
          var datePipe = new DatePipe("en-UK");
          let formatedDate: any = datePipe.transform(data.EnquiryDate, 'yyyy-MM-dd');
          data.EnquiryDate = formatedDate
          this.userService.formData = Object.assign({}, data);
        },
        error => console.log(error)
      );
    }
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    let addId = this.userService.formData.UserId;
    //insert
    if (addId == 0 || addId == null) {
      console.log("inserting////");
      this.insertUserRecord(form);
    }
    else {
      //update
      console.log("Updating record...");
      this.updateUserRecord(form);
      this.toastrService.success('User record has been updated', 'CRM');

    }
  }
  //clear all contents at initialization
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }
  //defining insert record
  insertUserRecord(form?: NgForm) {
    console.log("Inserting a record...");
    this.userService.insertUser(form.value).subscribe(
      (result) => {
        console.log(result);
        this.resetForm(form);
        this.toastrService.success("User record has been inserted", "CRM");
      }
    );
    //window.location.reload();
  }
  //defining update record
  updateUserRecord(form?: NgForm) {
    this.userService.updateUser(form.value).subscribe(
      (result) => {
        console.log(result);
        this.resetForm(form);
        this.toastrService.success("User record has been updated", "CRM");
        this.userService.bindListUsers();
      }
    );
    //window.location.reload();
  }
}
