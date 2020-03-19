import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message/message.service';
import { Color } from 'ng2-charts'

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html'
})
export class ChartsComponent implements OnInit {
  // colors pulled from https://coreui.io/demo/3.0.0/#colors.html
  colors: Color[] = [{ backgroundColor: ['#321fdb', '#f9b115', '#e55353', '#3399ff', '#2eb85c', '#636f83', '#ced2d8'] }];

  doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  doughnutChartData: number[] = [];
  doughnutChartType = 'doughnut';

  barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  barChartType = 'bar';
  barChartLegend = true;
  barChartData: any[] = [{}];

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    setTimeout(() => {
      this.barChartData = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
      ];
      this.doughnutChartData = [350, 450, 100];
      this.messageService.success('Successfully loaded charts view');
    }, 500);

  }
}
