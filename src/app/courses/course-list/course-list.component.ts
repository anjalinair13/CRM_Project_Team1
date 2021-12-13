import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/shared/course.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Course } from 'src/app/shared/course';
import { PagevisitService } from 'src/app/shared/pagevist.service';
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

 page:number=1;
filter:string;
  constructor(public pagevisit:PagevisitService, public courseService:CourseService,private toastrService:ToastrService,private router :Router) { }

  ngOnInit(): void {
    this.courseService.bindListCourses();
    this.UpdatePage();
  }


  //populate form by clicking the column fields
  populateForm(cor:Course){
    console.log(cor);
    this.courseService.formData=Object.assign({},cor);
   
  }

  deleteCourse(res: Course) {
    console.log(res);
    console.log(res.CourseName);
    var value = confirm("Are you sure to delete " + res.CourseName + " ?")
    if (value) {
      console.log("Deleting a record!!");
      res.IsAvailable = false;
      console.log(res);
      this.courseService.updateCourse(res).subscribe(
        (result) => {
          console.log(result);
          this.courseService.bindListCourses();
        });
      this.toastrService.warning(res.CourseName + " deleted!", 'Training App');
    }
    else {
      //this.toastrService.info("Employee " + id + " deleted!", 'TrainingApp');
    }
  }

//update a course
updateCourse(corId:number)
{
  console.log(corId);
    this.router.navigate(['course',corId])
  
}
UpdatePage()
{
 this.pagevisit.UpdatePageCount(2);

}
}
