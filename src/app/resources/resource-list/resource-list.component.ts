import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResourceService } from 'src/app/shared/resource.service';
import { ToastrService } from 'ngx-toastr';
import { Resource } from 'src/app/shared/resource';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit {
  page: number = 1;
  filter: string;

  constructor(public resourceService: ResourceService, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.resourceService.bindListResources();
    
  }

   //populate form by clicking the column fields
   populateForm(resource: Resource) {
    console.log(resource);
    this.resourceService.formData=Object.assign({},resource);

  }

  deleteResource(res: Resource) {
    console.log(res);
    console.log(res.ResourceName);
    var value = confirm("Are you sure to delete " + res.ResourceName + " ?")
    if (value) {
      console.log("Deleting a record!!");
      res.IsAvailable = false;
      console.log(res);
      this.resourceService.updateResource(res).subscribe(
        (result) => {
          console.log(result);
          this.resourceService.bindListResources();
        });
      this.toastrService.warning(res.ResourceName + " deleted!", 'Training App');
    }
    else {
      //this.toastrService.info("Employee " + id + " deleted!", 'TrainingApp');
    }
  }

  //update a resource
  updateResource(resourceId: number) {
    console.log("Resource id is" +resourceId);
    this.router.navigate(['resource', resourceId])

  }
}
