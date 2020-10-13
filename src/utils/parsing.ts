import _ from 'lodash';
import random from 'random';
import moment from 'moment';
import {
  IPoint,
  IStockChange,
  IStock,
  IBuySellStockRequest,
  IPauseResumeGameRequest,
  IGetAccountBalancesRequest,
  IGetUserProfitLossRequest,
  IVerifyPaymentRequest,
  IBoardUser,
  IGetUserInfoRequest,
  IUserGame,
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

export function getGameScore(game: IUserGame) {
  let gameScore = 0;

  _.forEach(game?.profitLoss, (gameProfit) => {
    gameScore += gameProfit.profitLoss;
  });

  return gameScore;
}

export function selectBestUserScore(user: IBoardUser): number {
  let bestScore = 0;

  _.forEach(user?.games, (game) => {
    const currentGameScore = getGameScore(game);

    if (currentGameScore > bestScore) {
      bestScore = currentGameScore;
    }
  });

  return Math.floor(bestScore);
}

export function generateRandomPointData(length: number = 20): IPoint[] {
  const RANDOM_POINT_RANGES = {
    y: [75, 125],
  };

  const randomPoints: IPoint[] = [];

  for (let i = 1; i <= length; i += 1) {
    randomPoints.push({
      x: moment(i).format('-mm:ss'),
      y: random.float(RANDOM_POINT_RANGES.y[0], RANDOM_POINT_RANGES.y[1]),
    });
  }

  return randomPoints.reverse();
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

export function getUserInfoRequest(email: string): IGetUserInfoRequest {
  const requestBody: IGetUserInfoRequest = {
    variables: {
      email,
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
