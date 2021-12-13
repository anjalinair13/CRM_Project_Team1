import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Resource } from 'src/app/shared/resource';
import { ResourceService } from 'src/app/shared/resource.service';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {

  resourceId: number;
  resource: Resource = new Resource();

  constructor(private toastrService: ToastrService,
    private router: Router, public resourceService: ResourceService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    //get resourceId from activated route
    this.resourceId = this.route.snapshot.params['resourceId'];
    this.resetform();
    //console.log("Resource id is"+this.resourceId)
    this.resourceService.bindListResources();

    if (this.resourceId != 0 || this.resourceId != null) {
      //getResource
      this.resourceService.getResource(this.resourceId).subscribe(
        (data: any): void => {
          console.log(data);

          /*
          var datePipe = new DatePipe("en-UK");
          let formatedDate: any = datePipe.transform(data.DateOfJoining, 'yyyy-MM-dd');
          data.DateOfJoining = formatedDate;*/
          this.resourceService.formData = Object.assign({}, data);
        },
        error =>
          console.log(error)
      );

    }
  }

    onSubmit(form: NgForm)
    {
      console.log(form.value);
      let addId = this.resourceService.formData.ResourceId;

      if (addId == 0 || addId == null) {
        //insert
        this.insertRecord(form);
      }
      else {
        //update
        console.log("update")
        this.updateRecord(form);
      }

    }

    //reset/clear all content from form  at initialization
    
    resetform(form?:NgForm){
      if (form != null) {
        form.resetForm();

      }

    }


    //insert
    insertRecord(form?:NgForm){
      console.log("inserting a record...");
      this.resourceService.insertResource(form.value).subscribe
        ((result) => {
          console.log(result);
          this.resetform(form);
          this.toastrService.success('resource has been inserted', 'Training App');

        }
        );
      //window.alert("Resource record has been inserted");
     window.location.reload();
    }



    //update
    updateRecord(form?:NgForm)
    {
      console.log("updating a record...");
      this.resourceService.updateResource(form.value).subscribe
        ((result) => {
          console.log(result);
          this.resetform(form);
          this.toastrService.success(' Record has been updated', 'Training appv2021');
          //this.resourceService.bindListPost();
        }
        );

      //window.alert("Resource record has been updated");
      window.location.reload();

  }
}
  

