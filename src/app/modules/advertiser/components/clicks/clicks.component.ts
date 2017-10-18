import {Component} from '@angular/core';

@Component({
  selector: 'app-clicks',
  templateUrl: './clicks.component.html',
  styleUrls: ['./clicks.component.css']
})
export class ClicksComponent {

  options: any = {
    legend: {position: 'bottom'}
  }
  chartLabels: string[] = ['Is', 'Sved', 'Kanne'];
  chartData: number[] = [56, 43, 244];
  chartType = 'doughnut';
  colors: Array<any> = [
    {
      backgroundColor: [
        '#e5b022',
        '#3a9c93',
        '#425e8e',
        '#eabd51',
        '#63aba5',
        '#65749e',
        '#f1d390',
        '#99c6c1',
        '#959cbc',
        '#f8e8c4',
        '#c9e1df',
        '#c4c7da']
    }];


  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
