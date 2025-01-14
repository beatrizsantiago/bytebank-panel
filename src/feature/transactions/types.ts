export interface ITransactionData {
  id: string;
  accountId: string;
  type: 'Credit' | 'Debit';
  value: number;
  date: string;
  from: string;
  to: string;
  attachment: File;
};

export interface ITransactionsState {
  list: ITransactionData[];
};

export interface IEditedTransactionData {
  id: string;
  type: 'Credit' | 'Debit';
  value: number;
};
