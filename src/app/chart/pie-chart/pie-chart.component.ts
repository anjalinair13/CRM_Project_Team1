import { Component, OnInit } from '@angular/core';
declare var google:any;


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  productSales:any[]
  productSalesMulti:any[]

  constructor() { }

  ngOnInit(): void {
    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(this.drawChart);
  }
  drawChart(){
     // Create the data table.
     var data = new google.visualization.DataTable();
     data.addColumn('string', 'Topping');
     data.addColumn('number', 'Slices');
     data.addRows([
       ['Mushrooms', 3],
       ['Onions', 1],
       ['Olives', 1], 
       ['Zucchini', 1],
       ['Pepperoni', 2]
     ]);
     var chart = new google.visualization.PieChart(document.getElementById('divPieChart'));
     chart.draw(data, null);

  }

}
