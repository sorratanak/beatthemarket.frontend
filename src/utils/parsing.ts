import {
  IPoint,
  IStockChange,
  IStock,
  IBuySellStockRequest,
  IPauseResumeGameRequest,
  IGetAccountBalancesRequest,
  IGetUserProfitLossRequest,
  IVerifyPaymentRequest,
} from '../types';

export function getStockChanges(prelastItem: IPoint, lastItem: IPoint) {
  const currentValue: number = lastItem?.y;

  let difference: number = 0;
  let type: 'sell' | 'buy' = null;
  let percent: number = 0;

  if (prelastItem) {
    difference = Number((lastItem.y - prelastItem.y).toFixed(2));
    type = prelastItem.y > lastItem.y ? 'sell' : 'buy';
    percent = Number(((lastItem.y / prelastItem.y) * 100 - 100).toFixed(2));
  }

  const stockChange: IStockChange = {
    currentValue,
    difference,
    type,
    percent,
  };

  return stockChange;
}

export function getSellBuyStockRequest(
  gameId: string,
  activeStock: IStock,
  stockAmount: number,
): IBuySellStockRequest {
  const [lastTick] = activeStock?.ticks?.slice(-1);

  const requestBody: IBuySellStockRequest = {
    variables: {
      input: {
        gameId,
        stockId: activeStock.id,
        stockAmount: Math.round(stockAmount),
        tickId: lastTick.stockTickId,
        tickPrice: lastTick.stockTickClose,
      },
    },
  };

  return requestBody;
}

export function getAccountBalancesRequest(
  gameId: string,
  email: string,
): IGetAccountBalancesRequest {
  const requestBody: IGetAccountBalancesRequest = {
    variables: {
      gameId,
      email,
    },
  };

  return requestBody;
}

export function getPauseResumeGameRequest(gameId: string) {
  const requestBody: IPauseResumeGameRequest = {
    variables: {
      gameId,
    },
  };

  return requestBody;
}

export function getLastAndPrelast(data: any[]) {
  const [prelast, last] = data.slice(-2);
  return !last ? [null, prelast] : [prelast, last];
}

export function getUserProfitLossRequest(
  gameId: string,
  email: string,
): IGetUserProfitLossRequest {
  const requestBody: IGetUserProfitLossRequest = {
    variables: {
      gameId,
      email,
    },
  };

  return requestBody;
}

export function getVerifyPaymentRequest(
  productId: string,
  provider: string,
  purchase: Object,
): IVerifyPaymentRequest {
  const stringifiedPurchase: string = JSON.stringify(purchase);

  const requestBody: IVerifyPaymentRequest = {
    variables: {
      productId,
      provider,
      token: stringifiedPurchase,
    },
  };

  return requestBody;
}
