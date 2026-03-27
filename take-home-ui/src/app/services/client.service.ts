import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Client } from '../models/client.model';
import { Transaction } from '../models/transaction.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private clientUrl = 'assets/client.json';
  private transactionsUrl = 'assets/transaction.json';

  constructor(private http: HttpClient) {}

  getClient(): Observable<Client> {
    return this.http.get<Client>(this.clientUrl).pipe(
      catchError(err => {
        console.error('Error fetching client', err);
        return throwError(() => new Error('Failed to load client data'));
      })
    );
  }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.transactionsUrl).pipe(
      catchError(err => {
        console.error('Error fetching transactions', err);
        return throwError(() => new Error('Failed to load transactions data'));
      })
    );
  }
}