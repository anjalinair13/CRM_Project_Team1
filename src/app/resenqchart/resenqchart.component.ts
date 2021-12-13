import { Component, OnInit } from '@angular/core';
import { RenquiryService } from 'src/app/shared/renquiry.service';
import { ResourceService } from 'src/app/shared/resource.service';

@Component({
  selector: 'app-resenqchart',
  templateUrl: './resenqchart.component.html',
  styleUrls: ['./resenqchart.component.css']
})
export class ResenqchartComponent implements OnInit {

  public doughnutChartLabels = [];
  public doughnutChartData = [];
  public doughnutChartType = 'pie';
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
  

  constructor(public resourceService:ResourceService, public renqService:RenquiryService) { }

  ngOnInit(): void {
    this.resourceService.bindListResources(); 
    this.renqService.bindListREnquiry();
  }
  getCourseName(){
    var cnamedata = this.resourceService.resources.map(t=>t.ResourceName);
    var cordata = this.resourceService.resources.map(t=>t.ResourceId);
    var enqdata = this.renqService.renquiries.map(r=>r.ResourceId);
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
