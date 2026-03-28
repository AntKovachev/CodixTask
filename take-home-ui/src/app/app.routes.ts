import { Routes } from '@angular/router';
import { ClientComponent } from './pages/client/client.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';

export const routes: Routes = [
  { path: '', redirectTo: 'client', pathMatch: 'full' },
  { path: 'client', component: ClientComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: '**', redirectTo: 'client' }
];