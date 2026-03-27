export type TransactionType = "Credit" | "Debit";
export type TransactionStatus = "Completed" | "Pending" | "Failed";

export interface Transaction {
  id: number;
  date: string;                // keeps JSON format; can convert to Date later
  name: string;
  city: string;
  bic: string;
  bankCard: string;
  amount: number;
  type: TransactionType;       // only Credit or Debit
  status: TransactionStatus;   // only Completed, Pending, or Failed
}