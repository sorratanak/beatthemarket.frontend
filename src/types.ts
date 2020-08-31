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
  type: 'sell' | 'buy';
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
  tickPrice: number;
}

export type IPortfolioUpdateType = 'ProfitLoss' | 'AccountBalance';

export interface IPortfolioProfit {
  gameId: string;
  profitLoss: number;
  profitLossType: string;
  stockId: string;
  __typename: IPortfolioUpdateType;
}

export interface IPortfolioBalance {
  id: string;
  name: string;
  amount: number;
  balance: number;
  counterParty: string | null;
  __typename: IPortfolioUpdateType;
}

export type IPortfolio = IPortfolioProfit & IPortfolioBalance;

export interface IGameEvent {
  gameId: string;
  level: number;
  minutesRemaining: number;
  secondsRemaining: number;
  __typename: 'LevelTimer';
}

export interface IGameEventScore {
  event: 'lose' | 'win';
  gameId: string;
  profitLoss: string;
  level: number;
  __typename: 'LevelStatus';
}

export interface IGameEventExit {
  event: 'exit';
  gameId: string;
  __typename: 'ControlEvent';
}

export interface ISubscriptionPlan {
  id: string;
  balance: number;
  price: number;
}

/* ------ Requests ------ */

export interface IGraphqlVariableRequest<VariablesObj> {
  variables: VariablesObj;
}

export interface IBuySellStockRequest
  extends IGraphqlVariableRequest<{ input: IBuySellStockInput }> {}

export interface IPauseResumeGameRequest
  extends IGraphqlVariableRequest<{ gameId: string }> {}

/* ---------------------- */
