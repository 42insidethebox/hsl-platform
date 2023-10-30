import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserActivity {
  date: Date;
  type: string;
  description: string;
  status: string;
  amount?: number;
  action?: string; // This can be a URL or identifier for the action
}

@Component({
  selector: 'app-history-timeline',
  templateUrl: './history-timeline.component.html',
  styleUrls: ['./history-timeline.component.css'],
})
export class HistoryTimelineComponent {
  dataSource = new MatTableDataSource<UserActivity>([
    {
      date: new Date('2023-10-25'),
      type: 'Purchase',
      description: 'Bought equipment',
      status: 'Completed',
      amount: 200,
      action: 'Details',
    },
    {
      date: new Date('2023-10-24'),
      type: 'Sale',
      description: 'Sold old gear',
      status: 'Pending',
      amount: 150,
      action: 'Details',
    },
    {
      date: new Date('2023-10-23'),
      type: 'Refund',
      description: 'Customer refund for damaged item',
      status: 'Processed',
      amount: -50,
      action: 'Details',
    },
    {
      date: new Date('2023-10-22'),
      type: 'Purchase',
      description: 'Bought accessories',
      status: 'Completed',
      amount: 75,
      action: 'Details',
    },
    {
      date: new Date('2023-10-21'),
      type: 'Sale',
      description: 'Sold sports gear',
      status: 'Completed',
      amount: 120,
      action: 'Details',
    },
    {
      date: new Date('2023-10-20'),
      type: 'Rental',
      description: 'Rented out camera equipment',
      status: 'Ongoing',
      amount: 60,
      action: 'Details',
    },
    {
      date: new Date('2023-10-19'),
      type: 'Commission',
      description: 'Earned commission from affiliate',
      status: 'Paid',
      amount: 30,
      action: 'Details',
    },
    {
      date: new Date('2023-10-18'),
      type: 'Sale',
      description: 'Sold old laptop',
      status: 'Pending Pickup',
      amount: 500,
      action: 'Details',
    },
    {
      date: new Date('2023-10-17'),
      type: 'Rental',
      description: 'Rented out studio space',
      status: 'Ongoing',
      amount: 100,
      action: 'Details',
    },
    {
      date: new Date('2023-10-16'),
      type: 'Purchase',
      description: 'Bought new software license',
      status: 'Completed',
      amount: 300,
      action: 'Details',
    },
  ]);
  displayedColumns: string[] = [
    'date',
    'type',
    'description',
    'status',
    'amount',
    'action',
  ];
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  viewDetails(activity: UserActivity): void {
    console.log('Viewing details for:', activity);
    // You can add more logic here. For instance, navigate to a details page or open a modal/dialog with the activity details.
  }
}
