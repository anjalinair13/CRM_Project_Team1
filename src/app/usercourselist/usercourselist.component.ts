import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Course } from '../shared/course';
import { CourseService } from '../shared/course.service';
import { PagevisitService } from '../shared/pagevist.service';

@Component({
  selector: 'app-usercourselist',
  templateUrl: './usercourselist.component.html',
  styleUrls: ['./usercourselist.component.css']
})
export class UsercourselistComponent implements OnInit {
  CourseId: number;
  page: number = 1;
  filter: string;
  constructor(public courseService: CourseService, private toastrService: ToastrService,
    public pagevisit: PagevisitService, private router: Router, private route: ActivatedRoute) { }



  ngOnInit(): void {
    this.courseService.bindListCourses();
    this.UpdatePage();
  }


  //populate form by clicking the column fields
  populateForm(cor: Course) {
    console.log(cor);
    this.courseService.formData = Object.assign({}, cor);

  }
  UpdatePage() {
    this.pagevisit.UpdatePageCount(2);

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
  updateCourse(corId: number) {
    console.log(corId);
    this.router.navigate(['course', corId])

  }





passId(courseId)
{
  console.log(courseId);
  this.router.navigate(['cenquiry', {courseId}]);

}


  //populate form by clicking the column fields
  /*populateForm(cor: Course) {
    console.log(cor);
    this.courseService.formData = Object.assign({}, cor);

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
  updateCourse(corId: number) {
    console.log(corId);
    this.router.navigate(['course', corId])

  }*/

}
