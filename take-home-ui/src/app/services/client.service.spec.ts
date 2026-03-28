import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ClientService } from './client.service';
import { Client } from '../models/client.model';
import { Transaction } from '../models/transaction.model';

describe('ClientService', () => {
  let service: ClientService;
  let httpMock: HttpTestingController;

  const mockClient: Client = {
    name: 'Georgi',
    secondName: 'Petrov',
    email: 'g.petrov@email.com',
    phone: '+359 88 123 4567',
    address: '15 Vitosha Blvd, Sofia',
    city: 'Sofia',
    country: 'Bulgaria',
    accountNumber: 'BG80BNBG96611020345678',
    bankCard: '4532 **** **** 1234'
  };

  const mockTransactions: Transaction[] = [
    {
      id: 1,
      date: '2025-03-01',
      name: 'Georgi Petrov',
      city: 'Sofia',
      bic: 'BNBGBGSD',
      bankCard: '4532 **** **** 1234',
      amount: 1500,
      type: 'Credit',
      status: 'Completed'
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientService, provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(ClientService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('getClient()', () => {
    it('fetches client data from the correct URL', () => {
      service.getClient().subscribe(client => {
        expect(client).toEqual(mockClient);
      });

      const req = httpMock.expectOne('assets/client.json');
      expect(req.request.method).toBe('GET');
      req.flush(mockClient);
    });

    it('propagates an error when the request fails', () => {
      service.getClient().subscribe({
        error: (err: Error) => {
          expect(err.message).toBe('Failed to load client data');
        }
      });

      httpMock.expectOne('assets/client.json').flush(null, { status: 500, statusText: 'Server Error' });
    });
  });

  describe('getTransactions()', () => {
    it('fetches transactions from the correct URL', () => {
      service.getTransactions().subscribe(transactions => {
        expect(transactions).toEqual(mockTransactions);
      });

      const req = httpMock.expectOne('assets/transactions.json');
      expect(req.request.method).toBe('GET');
      req.flush(mockTransactions);
    });

    it('propagates an error when the request fails', () => {
      service.getTransactions().subscribe({
        error: (err: Error) => {
          expect(err.message).toBe('Failed to load transactions data');
        }
      });

      httpMock.expectOne('assets/transactions.json').flush(null, { status: 404, statusText: 'Not Found' });
    });
  });
});
