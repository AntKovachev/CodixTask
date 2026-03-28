import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { ClientService } from '../../services/client.service';
import { Transaction } from '../../models/transaction.model';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[] = [];
  isReady = false;
  error = '';

  constructor(private clientService: ClientService) {}

  ngOnInit(): void {
    this.clientService.getTransactions().pipe(delay(750)).subscribe({
      next: (data) => {
        this.transactions = data;
        this.isReady = true;
      },
      error: () => {
        this.error = 'Failed to load transactions. Please try again.';
      }
    });
  }
}
