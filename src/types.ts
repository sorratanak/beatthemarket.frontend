export interface IUserBankAccount {
  accountId: string;
  accountName: string;
  accountBalance: number;
  accountAmount: number;
}

export interface IUser {
  userEmail: string;
  userName: string;
  userExternalUid: string;
  userAccounts: IUserBankAccount[];
}

export interface IScore {
  rate: string | number;
  deposit: string | number;
  percent: string | number;
}

export interface IStockTick {}
