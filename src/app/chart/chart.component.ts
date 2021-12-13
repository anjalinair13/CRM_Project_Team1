import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PagevisitService } from '../shared/pagevist.service';
//import { Label } from 'ng2-charts';
//import { Chart, ChartDataset, ChartOptions, ChartType, Ticks } from 'node_modules/chart.js';
//import * as pluginDataLabels from 'chartjs-plugin-datalabels'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  public doughnutChartLabels = [];
  public doughnutChartData = [];
  public doughnutChartType = 'doughnut';
  public doughnutColors = [
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

  constructor(public pageService: PagevisitService, private router: Router) { }

  ngOnInit(): void {

    this.pageService.bindListPageVisit();

  }

  getPageCount() {

    var cnamedata = this.pageService.pagevisit.map(r => r.PageName);
    var cordata = this.pageService.pagevisit.map(r => r.PageCount);

    // var enqdata = this.pageService.pagevisit.map(r=>r.PageName);
    this.doughnutChartLabels = [];
    this.doughnutChartData = [];
    for (var cndata of cnamedata) {
      this.doughnutChartLabels.push(cndata);

    }

    for (var cdata of cordata) {
      this.doughnutChartData.push(cdata);
    }
    console.log('data accessed');

  }

}
