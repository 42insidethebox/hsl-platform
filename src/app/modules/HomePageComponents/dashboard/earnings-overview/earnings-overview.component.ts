import { Component, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-earnings-overview',
  templateUrl: './earnings-overview.component.html',
  styleUrls: ['./earnings-overview.component.css'],
})
export class EarningsOverviewComponent {
  customColorScheme = 'vivid'; // using a predefined color scheme
  // Initialize toggle models to false
  showMetrics: boolean = true;
  showPerformance: boolean = true;
  showTransactionsOverTime: boolean = true;
  showAvgTrxValue: boolean = true;
  showDisputes: boolean = true;
  zoomType = 'xy'; // 'x', 'y', or 'xy' based on your requirement.
  selectedFilter!: string;
  // combinedChartData: any[] = [];
  dataError: boolean = false; // You can initialize it to false and update its value based on your logic.
  darkModeEnabled: boolean = false;
  currentPage: number = 1;
  totalPages: number = 10; // This should ideally come from your backend or based on the total number of reviews.
  // Add the missing properties
  rating: number = 0; // You can set a default value or fetch the actual rating
  totalRatings: number = 0; // Default value, you can fetch the actual number of ratings later
  ratingsData: any[] = [
    // your initial data here
  ];
  selectedSort: any;
  totalReviews: any;
  reviewsPerPage: number = 10; // Default value

  // Initialize our chart with data
  hustleServices = [
    'Tutoring',
    'Pet Sitting',
    'Delivery',
    'Handyman',
    'Photography',
  ];

  @ViewChild('chartRef', { static: false }) chartRef: any;

  onSeriesHide(event: any) {
    // handle the series hide event here
  }

  onSeriesShow(event: any) {
    // handle the series show event here
  }
  toggleDarkMode() {
    this.darkModeEnabled = !this.darkModeEnabled;

    if (this.darkModeEnabled) {
      document.body.classList.add('dark-mode');

      // Apply dark theme to the chart options
      this.chartOptions = {
        ...this.chartOptions,
        chart: {
          ...this.chartOptions.chart,
          backgroundColor: '#272727', // Dark background color
        },
        title: {
          ...this.chartOptions.title,
          style: {
            color: '#E0E0E3', // Light text color
          },
        },
        xAxis: {
          ...this.chartOptions.xAxis,
          labels: {
            style: {
              color: '#E0E0E3', // Light text color for x-axis labels
            },
          },
        },
        yAxis: {
          ...this.chartOptions.yAxis,
          labels: {
            style: {
              color: '#E0E0E3', // Light text color for y-axis labels
            },
          },
          gridLineColor: '#555555', // Dark grid lines
        },
        legend: {
          itemStyle: {
            color: '#e0e0e3', // Light mode text color for dark mode
          },
        },
        tooltip: {
          ...this.chartOptions.tooltip,
          backgroundColor: '#333333', // Dark tooltip background
          style: {
            color: '#E0E0E3', // Light tooltip text color
          },
        },
      };
    } else {
      document.body.classList.remove('dark-mode');

      // Reset to default theme
      this.chartOptions = {
        ...this.chartOptions,
        chart: {
          ...this.chartOptions.chart,
          backgroundColor: 'rgb(236,238,245)', // Default background color
        },
        title: {
          ...this.chartOptions.title,
          style: {
            color: '#333', // Default title text color
          },
        },
        xAxis: {
          ...this.chartOptions.xAxis,
          labels: {
            style: {
              color: '#888', // Default x-axis label color
            },
          },
        },
        yAxis: {
          ...this.chartOptions.yAxis,
          labels: {
            style: {
              color: '#888', // Default y-axis label color
            },
          },
          gridLineColor: 'rgba(255, 255, 255, 0.5)', // Default grid line color
        },
        legend: {
          itemStyle: {
            color: '#333', // Light mode text color for dark mode
          },
        },
        tooltip: {
          ...this.chartOptions.tooltip,
          backgroundColor: '#ffffff', // Default tooltip background color
          style: {
            color: '#333', // Default tooltip text color
          },
        },
      };
    }

    // Force re-render of the chart
    if (this.chartRef && this.chartRef.chart) {
      this.chartRef.chart.reflow();
    }
  }
  updateChartData() {
    let newSeriesData = []; // This will store the data for all active toggles
    console.log('updateChartData called'); // Add this line
    // Check each toggle and update the chart series data accordingly
    if (this.showMetrics) {
      newSeriesData.push({
        name: 'Money Earned',
        type: 'column',
        data: this.barChartData.map((entry) => entry.value),
        color: 'rgb(33,75,144)',
        visible: this.showMetrics,
      });
    }

    if (this.showPerformance) {
      newSeriesData.push({
        name: 'Performance',
        type: 'line',
        data: this.performanceRatingsData.map((entry) => entry.value),
        color: 'rgb(117,148,251)',
        visible: this.showPerformance,
      });
    }

    if (this.showTransactionsOverTime) {
      newSeriesData.push({
        name: 'Transactions Over Time',
        type: 'line',
        data: this.transactionsOverTimeData.map((entry) => entry.value),
        color: 'rgb(69,179,154)',
        visible: this.showTransactionsOverTime,
      });
    }

    if (this.showAvgTrxValue) {
      newSeriesData.push({
        name: 'Avg Transaction Value',
        type: 'line',
        data: this.avgTrxValueData.map((entry) => entry.value),
        color: 'rgb(254,190,16)',
        visible: this.showAvgTrxValue,
      });
    }

    if (this.showDisputes) {
      newSeriesData.push({
        name: 'Disputes',
        type: 'line',
        data: this.disputesData.map((entry) => entry.value),
        color: '#DF5353',
        visible: this.showDisputes,
      });
    }

    // Now, update the Highcharts component with the new data
    if (this.chartRef && this.chartRef.chart) {
      while (this.chartRef.chart.series.length > 0) {
        this.chartRef.chart.series[0].remove(false); // Remove all existing series without redrawing
      }

      // Add new series data
      for (let series of newSeriesData) {
        this.chartRef.chart.addSeries(series, false); // Add new series without redrawing
      }

      this.chartRef.chart.redraw(); // Now, redraw the chart once after all series are updated
    }
  }

  barChartData = [
    {
      name: 'Ride Share',
      value: 350, // e.g., Total rides provided
    },
    {
      name: 'Food Delivery',
      value: 420, // e.g., Total orders delivered
    },
    {
      name: 'Home Cleaning',
      value: 180, // e.g., Total homes cleaned
    },
    {
      name: 'Laundry',
      value: 240, // e.g., Total laundry orders
    },
    {
      name: 'Grocery Shopping',
      value: 300, // e.g., Total grocery orders
    },
    {
      name: 'Car Rental',
      value: 150, // e.g., Total cars rented
    },
    {
      name: 'Equipment Rental',
      value: 90, // e.g., Total equipment rented
    },
    {
      name: 'Grocery Shopping',
      value: 300, // e.g., Total grocery orders
    },
    {
      name: 'Pet Sitting',
      value: 120, // e.g., Total pet sitting assignments
    },
    {
      name: 'Tutoring',
      value: 200, // e.g., Total tutoring sessions
    },
    {
      name: 'Personal Training',
      value: 170, // e.g., Total training sessions
    },
    {
      name: 'Grocery Shopping',
      value: 300, // e.g., Total grocery orders
    },
  ];
  // Mock data for Average Transaction Value
  avgTrxValueData = [
    { name: 'Ride Share', value: 15 },
    { name: 'Food Delivery', value: 20 },
    { name: 'Home Cleaning', value: 50 },
    { name: 'Laundry', value: 25 },
    { name: 'Grocery Shopping', value: 30 },
    { name: 'Car Rental', value: 60 },
    { name: 'Equipment Rental', value: 45 },
    { name: 'Pet Sitting', value: 20 },
    { name: 'Home Cleaning', value: 50 },

    { name: 'Tutoring', value: 40 },
    { name: 'Personal Training', value: 55 },
    { name: 'Home Cleaning', value: 50 },
  ];

  // Mock data for Performance Ratings
  performanceRatingsData = [
    { name: 'Ride Share', value: 4.8 },
    { name: 'Food Delivery', value: 4.6 },
    { name: 'Home Cleaning', value: 4.7 },
    { name: 'Laundry', value: 4.5 },
    { name: 'Grocery Shopping', value: 4.9 },
    { name: 'Car Rental', value: 4.4 },
    { name: 'Equipment Rental', value: 4.3 },
    { name: 'Pet Sitting', value: 4.7 },
    { name: 'Grocery Shopping', value: 4.9 },
    { name: 'Food Delivery', value: 4.6 },

    { name: 'Tutoring', value: 4.9 },
    { name: 'Personal Training', value: 4.8 },
  ];

  // Mock data for Transactions Over Time
  transactionsOverTimeData = [
    { name: 'Jan 2023', value: 120 },
    { name: 'Feb 2023', value: 130 },
    { name: 'Mar 2023', value: 140 },
    { name: 'Apr 2023', value: 125 },
    { name: 'May 2023', value: 135 },
    { name: 'Jun 2023', value: 145 },
    { name: 'Jul 2023', value: 150 },
    { name: 'Aug 2023', value: 155 },
    { name: 'Sep 2023', value: 160 },
    { name: 'Oct 2023', value: 165 },
    { name: 'Nov 2023', value: 170 },
    { name: 'Dec 2023', value: 175 },
  ];

  // Mock data for Disputes
  disputesData = [
    { name: 'Ride Share', value: 2 },
    { name: 'Food Delivery', value: 3 },
    { name: 'Home Cleaning', value: 1 },
    { name: 'Laundry', value: 2 },
    { name: 'Grocery Shopping', value: 1 },
    { name: 'Car Rental', value: 4 },
    { name: 'Equipment Rental', value: 3 },
    { name: 'Pet Sitting', value: 1 },
    { name: 'Tutoring', value: 2 },
    { name: 'Personal Training', value: 3 },
    { name: 'Personal Training', value: 3 },
    { name: 'Personal Training', value: 3 },
  ];
  // This method can be used to prepare data for the charts dynamically
  getChartData(metric: string): any[] {
    switch (metric) {
      case 'moneyEarned':
        return this.barChartData;
      case 'performanceRatings':
        return this.performanceRatingsData;
      case 'transactionsOverTime':
        return this.transactionsOverTimeData;
      case 'avgTrxValue':
        return this.avgTrxValueData;

      case 'disputes':
        return this.disputesData;
      default:
        return [];
    }
  }

  public Highcharts = Highcharts;
  public chartOptions: Highcharts.Options = {
    chart: {
      type: 'spline',
      backgroundColor: 'rgb(236,238,245)', // Dark mode background color
    },

    title: {
      text: 'Earnings Overview',
      style: {
        color: '#333', // Dark mode title text color
      },
    },
    xAxis: {
      categories: [
        // Your categories here
      ],
      labels: {
        style: {
          color: '#888', // Dark mode label text color
        },
      },
    },
    yAxis: {
      // Your yAxis configuration
      labels: {
        style: {
          color: '#888', // Dark mode label text color
        },
      },
      gridLineColor: 'rgba(255, 255, 255, 0.5)', // Color for grid lines (white with transparency)
    },
    plotOptions: {
      column: {
        pointPadding: 0.05, // Adjust the spacing between points (bars)
        groupPadding: 0.05, // Adjust the spacing between groups of bars
      },
    },

    tooltip: {
      shared: true,
      useHTML: true,
      backgroundColor: '#333', // Dark mode tooltip background color
      style: {
        color: '#fff', // Dark mode tooltip text color
        fontSize: '1.2rem',
      },
      formatter: function () {
        let tooltip = '<b>' + this.x + '</b><br/>';
        this.points?.forEach((point) => {
          tooltip +=
            '<span style="color:' +
            point.color +
            '">\u25CF</span> ' +
            point.series.name +
            ': ' +
            point.y +
            '<br/>';
        });
        return tooltip;
      },
    },
    series: [
      {
        type: 'column',
        name: 'Money Earned',
        data: this.barChartData.map((entry) => entry.value),
        color: 'rgb(33,75,144)', // Dark mode series color
        borderColor: '1px solid transparent',
        visible: this.showMetrics,
      },
      {
        type: 'line',
        name: 'Performance',
        data: this.performanceRatingsData.map((entry) => entry.value),
        color: 'rgb(117,148,251)', // Dark mode series color
        visible: this.showPerformance,
      },
      {
        type: 'line',
        name: 'Avg Transaction Value',
        data: this.avgTrxValueData.map((entry) => entry.value),
        color: 'rgb(254,190,16)', // choose a color that suits your theme
        visible: this.showAvgTrxValue,
      },

      {
        type: 'line',
        name: 'Transactions Over Time',
        data: this.transactionsOverTimeData.map((entry) => entry.value),
        color: 'rgb(69,179,154)', // Dark mode series color
        visible: this.showTransactionsOverTime,
      },
      {
        type: 'line',
        name: 'Disputes',
        data: this.disputesData.map((entry) => entry.value),
        // color: 'rgb(117,148,251)', // Dark mode series color
        color: '#DF5353', // Dark mode series color
        visible: this.showDisputes,
      },
    ],
  };
}
