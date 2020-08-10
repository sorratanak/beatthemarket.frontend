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

export interface IScoreRecord {
  id: string;
  rank: number;
  username: string;
  score: string;
}

export interface IStockTick {
  stockId: string;
  stockTickClose: number;
  stockTickId: string;
  stockTickTime: string;
}

export interface IPoint {
  x: number | string;
  y: number;
}

export interface IStockChange {
  percent: number;
  type: 'fall' | 'rise';
  currentValue: number;
  difference: number;
}

export interface IStock {
  id: string;
  name: string;
  symbol: string;
  ticks?: IStockTick[];
}

export interface IBuySellStockInput {
  gameId: string;
  stockId: string;
  stockAmount: number;
  tickId: string;
  tickTime: number;
  tickPrice: number;
}

/* ------ Requests ------ */

export interface IGraphqlVariableRequest<VariablesObj> {
  variables: VariablesObj;
}

export interface IBuySellStockRequest
  extends IGraphqlVariableRequest<{ input: IBuySellStockInput }> {}

/* ---------------------- */
