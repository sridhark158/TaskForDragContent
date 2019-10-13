import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  chart: Chart;
  ngOnInit() {
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: dringlichkeiten.map(x => x.id),
        datasets: [
          {
            label: 'My Bar Chart',
            data: dringlichkeiten.map(x => x.value),
            backgroundColor: ['red', 'green', 'yellow', 'blue', 'orange']
          }
        ]
      },
    });/*
    this.chart.canvas.parentNode.style.height = '30px';
    this.chart.canvas.parentNode.style.width = '30px';*/
  }
  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
}
var dringlichkeiten  = [{
  "id": 1,
  "value": 883
},
  {
    "id": 2,
    "value": 5925
  },
  {
    "id": 3,
    "value": 17119
  },
  {
    "id": 4,
    "value": 27144
  },
  {
    "id": 5,
    "value": 2758
  }];
