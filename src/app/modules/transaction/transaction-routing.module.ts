import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionComponent } from './transaction.component';
import { TransactionDetailComponent } from './transaction-detail.component';
// Import transaction-related components
// import { TransactionComponent } from './transaction.component';
// import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';

const transactionRoutes: Routes = [
  { path: 'transactions', component: TransactionComponent },
  { path: 'transactions/:id', component: TransactionDetailComponent },
  // Add more transaction routes as needed
];

@NgModule({
  imports: [RouterModule.forChild(transactionRoutes)],
  exports: [RouterModule],
})
export class TransactionRoutingModule {}
