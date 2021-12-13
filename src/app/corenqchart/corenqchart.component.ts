import { Component, OnInit } from '@angular/core';
import { CenquiryService } from '../shared/cenquiry.service';
import { CourseService } from '../shared/course.service';



@Component({
  selector: 'app-corenqchart',
  templateUrl: './corenqchart.component.html',
  styleUrls: ['./corenqchart.component.css']
})
export class CorenqchartComponent implements OnInit {
  
  public doughnutChartLabels = [];
  public doughnutChartData = [];
  public doughnutChartType = 'doughnut';
 public doughnutColors=[
    {
      backgroundColor: [
          'rgba(92, 184, 92,1)',
          'rgba(255, 195, 0, 1)',
          'rgba(217, 83, 79,1)',
          'rgba(129, 78, 40, 1)',
          'rgba(129, 199, 111, 1)'
    ]
    }
  ];
  

  constructor(public courseService:CourseService, public cenqService:CenquiryService) { }

  ngOnInit(): void {
    this.courseService.bindListCourses(); 
    this.cenqService.bindListCEnquiry();
  }
  getCourseName(){
    var cnamedata = this.courseService.courses.map(t=>t.CourseName);
    var cordata = this.courseService.courses.map(t=>t.CourseId);
    var enqdata = this.cenqService.cenquiries.map(r=>r.CourseId);
    this.doughnutChartLabels = [];
    this.doughnutChartData = [];
    for (var cndata of cnamedata) {
    this.doughnutChartLabels.push(cndata);
    }
    for (var cdata of cordata) {
      var i:number=0;
      for(var edata of enqdata){
        if(cdata == edata){
          i++;
        }
      }
      this.doughnutChartData.push(i);
    }
    console.log('data accessed');
  }
}
