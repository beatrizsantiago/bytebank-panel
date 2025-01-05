export interface ITransactionData {
  id: string;
  accountId: string;
  type: 'Credit' | 'Debit';
  value: number;
  date: string;
  from: string;
  to: string;
};

export interface ITransactionsState {
  list: ITransactionData[];
}