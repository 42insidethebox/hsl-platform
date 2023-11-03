import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HeatmapModule from 'highcharts/modules/heatmap';
HeatmapModule(Highcharts);

@Component({
  selector: 'app-heatmap-section',
  templateUrl: './heatmap-section.component.html',
  styleUrls: ['./heatmap-section.component.css'],
})
export class HeatmapSectionComponent {
  public Highcharts = Highcharts;

  public heatmapOptions: Highcharts.Options = {
    chart: {
      type: 'heatmap',
      marginTop: 40,
      marginBottom: 80,
      plotBorderWidth: 1,
    },
    title: {
      text: 'October Heatmap',
    },
    xAxis: {
      categories: this.generateXAxisCategories(),
      title: {
        text: 'Day of October',
      },
    },
    yAxis: {
      categories: this.generateYAxisCategories(),
      title: {
        text: 'Day of the Month',
      },
    },
    colorAxis: {
      min: 0,
      minColor: '#FFFFFF',
      maxColor: Highcharts.getOptions().colors![0],
    },
    legend: {
      align: 'right',
      layout: 'vertical',
      margin: 0,
      verticalAlign: 'top',
      y: 25,
      symbolHeight: 280,
    },

    series: [
      {
        type: 'heatmap',
        name: 'October Heatmap Data',
        borderWidth: 1,
        data: this.generateHeatmapData(),
        dataLabels: {
          enabled: true,
          color: '#000000',
          formatter: function () {
            return this.point.x + 1; // Display day of the month in the center of the heatmap square
          },
          style: {
            fontWeight: 'bold', // Make the day of the month text bold
          },
        },
      },
    ],
  };

  generateYAxisCategories(): string[] {
    const numberOfWeeks = 5;
    const yAxisCategories: string[] = [];

    for (let week = 1; week <= numberOfWeeks; week++) {
      yAxisCategories.push('Week ' + week); // Add week number
    }

    return yAxisCategories;
  }

  generateXAxisCategories(): string[] {
    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const xAxisCategories: string[] = [];

    for (let week = 1; week <= 5; week++) {
      for (let day = 1; day <= 7; day++) {
        const dayOfMonth = (week - 1) * 7 + day;
        xAxisCategories.push(`${daysOfWeek[day - 1]} (${dayOfMonth})`);
      }
    }

    return xAxisCategories;
  }

  generateHeatmapData(): (number | null)[][] {
    const numberOfWeeks = 5;
    const data: (number | null)[][] = [];

    for (let week = 1; week <= numberOfWeeks; week++) {
      for (let day = 0; day < 7; day++) {
        const dayData: (number | null)[] = [];

        // Generate data for each day here
        // For example, you can use random values as placeholders
        for (let hour = 0; hour < 24; hour++) {
          // Generate a random value for each hour of the day
          const value = Math.floor(Math.random() * 10); // Random value between 0 and 9
          dayData.push(value);
        }

        data.push(dayData);
      }
    }

    return data;
  }
}
