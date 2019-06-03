import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Approute } from './app.routes';
import { RouterModule } from '@angular/router';
import { BlockchainViewerComponent } from './pages/blockchain-viewer/blockchain-viewer.component';
import { BlockViewComponent } from './components/block-view/block-view.component';
import { CreateTransactionComponent } from './pages/create-transaction/create-transaction.component';
import { TransactionsTableComponent } from './components/transactions-table/transactions-table.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { PendingTransactionsComponent } from './pages/pending-transactions/pending-transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockchainViewerComponent,
    BlockViewComponent,
    CreateTransactionComponent,
    TransactionsTableComponent,
    SettingsComponent,
    PendingTransactionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(Approute),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
