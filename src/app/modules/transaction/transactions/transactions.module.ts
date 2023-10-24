import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from './payments/payments.component';
import { SendComponent } from './payments/send/send.component';
import { ReceiveComponent } from './payments/receive/receive.component';
import { HistoryComponent } from './payments/history/history.component';
import { DetailsComponent } from './payments/details/details.component';
import { StatusComponent } from './payments/status/status.component';
import { DisputesComponent } from './payments/disputes/disputes.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { CreateComponent } from './invoices/create/create.component';
import { MyInvoicesComponent } from './invoices/my-invoices/my-invoices.component';



@NgModule({
  declarations: [
    PaymentsComponent,
    SendComponent,
    ReceiveComponent,
    HistoryComponent,
    DetailsComponent,
    StatusComponent,
    DisputesComponent,
    InvoicesComponent,
    CreateComponent,
    MyInvoicesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TransactionsModule { }
