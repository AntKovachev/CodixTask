import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Transaction } from '../../models/transaction.model';
import { AmountPipe } from '../../pipes/amount.pipe';
import { DateFormatPipe } from '../../pipes/date-format.pipe';

@Component({
  selector: 'app-transaction-modal',
  standalone: true,
  imports: [AmountPipe, DateFormatPipe],
  templateUrl: './transaction-modal.component.html',
  styleUrl: './transaction-modal.component.css'
})
export class TransactionModalComponent {
  @Input() transaction!: Transaction;
  @Output() close = new EventEmitter<void>();
}
