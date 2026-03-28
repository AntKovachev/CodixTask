import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { delay } from 'rxjs';
import { ClientService } from '../../services/client.service';
import { Transaction } from '../../models/transaction.model';
import { AmountPipe } from '../../pipes/amount.pipe';
import { DateFormatPipe } from '../../pipes/date-format.pipe';
import { TransactionModalComponent } from '../../components/transaction-modal/transaction-modal.component';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [FormsModule, AmountPipe, DateFormatPipe, TransactionModalComponent],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[] = [];
  filterQuery = '';
  isReady = false;
  error = '';
  selectedTransaction: Transaction | null = null;

  openModal(transaction: Transaction): void {
    this.selectedTransaction = transaction;
  }

  closeModal(): void {
    this.selectedTransaction = null;
  }

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

  get filteredTransactions(): Transaction[] {
    const q = this.filterQuery.trim().toLowerCase();
    if (!q) return this.transactions;
    return this.transactions.filter(t =>
      t.name.toLowerCase().includes(q) ||
      t.status.toLowerCase().includes(q)
    );
  }
}
