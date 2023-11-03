import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-history',
  templateUrl: './job-history.component.html',
  styleUrls: ['./job-history.component.css'],
})
export class JobHistoryComponent implements OnInit {
  displayedColumns: string[] = [
    'jobDate',
    'description',
    'amount',
    'duration',
    'rating',
    'status',
    'actions',
  ];
  jobHistory: Array<any> = [];

  ngOnInit() {
    this.initializeJobHistory();
  }

  initializeJobHistory() {
    // Fetch or set job history data here. This is a sample for demonstration.
    this.jobHistory = [
      {
        jobDate: '2023-11-20',
        description: 'Installed kitchen sink',
        amount: 150,
        duration: 2,
        rating: 4,
        status: 'Completed',
      },
      // ... Add more job history records as needed
    ];
  }
}
