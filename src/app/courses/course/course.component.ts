import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Course } from 'src/app/shared/course';
import { CourseService } from 'src/app/shared/course.service';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

    corId:number;
    course:Course=new Course();

      constructor(public corservice:CourseService,private toastrService: ToastrService,private router :Router,
        private route:ActivatedRoute) { }
    
      ngOnInit(): void {
        this.corservice.BindCmdQualification();
    
      this.corId=this.route.snapshot.params['corId'];
     
        if(this.corId!=0||this.corId!=null){
          this.corservice.getCourse(this.corId).subscribe(
            data=>{
              console.log(data);
              this,this.corservice.formData=data;
               
            this.corservice.formData=Object.assign({},data);
         
            },
            error=>
            console.log(error)
          );
        }
     
      
      }
      onSubmit(form:NgForm){
        console.log(form.value);
        let addId =this.corservice.formData.CourseId;
       
        if(addId==0||addId==null){
           //insert
          this.insertCourseRecord(form);
        }
        else
        {
          //update
         console.log("update")
         this.updateCourseRecord(form);
        }
      
      }
    
      //reset/clear all content from form  at initialization
      resetform(form?:NgForm){
        if(form!=null){
          form.resetForm();
    
        }
    
      }
      //insert
      insertCourseRecord(form?:NgForm){
        console.log("inserting a record...");
        this.corservice.insertCourse(form.value).subscribe
        ((result)=>
        {
          console.log(result);
          this.resetform(form);
          this.toastrService.success('Course record has been inserted','CRM appv2021');
         
        }
        );
        window.alert("Course record has been inserted");
        window.location.reload();
      }
    
        //update
        updateCourseRecord(form?:NgForm)
        {
          console.log("updating a record...");
          this.corservice.updateCourse(form.value).subscribe
          ((result)=>
          {
            console.log(result);
            this.resetform(form);
            this.toastrService.success('Course record has been inserted','CRM appv2021');
           this.corservice.bindListCourses();
          }
          );
          window.alert("Course record has been updated");
          window.location.reload();
    
        
      }
    
    
    }
    
    
    