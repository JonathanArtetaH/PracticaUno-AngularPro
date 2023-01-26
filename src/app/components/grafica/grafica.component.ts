import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {

  @Input() typeGrafica: ChartType ='doughnut';
  @Input() nameParams: string[] =[];
  @Input() Titulo: string ='';
  @Input() valoresParams: number[] =[];
  @Input() ColorsParams: string[] =[];

  constructor() { }

  
  doughnutChartType: ChartType = 'doughnut';
  doughnutChartLabels: string[]=[];
  
  doughnutChartData: ChartData<'doughnut'> = { 
    datasets: [
      { data: [ 350, 450, 100 ] }, 
    ]
  };

  ngOnInit(): void {
    
    this.doughnutChartType = this.typeGrafica; 
    this.doughnutChartLabels = this.nameParams; 
    this.doughnutChartData.labels = this.doughnutChartLabels;
    this.doughnutChartData.datasets[0].data = this.valoresParams;
    this.doughnutChartData.datasets[0].backgroundColor = this.ColorsParams; 
    
  }

}
