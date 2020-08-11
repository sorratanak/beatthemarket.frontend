import { IPoint, IStockChange, IStock, IBuySellStockRequest } from '../types';

export function getStockChanges(prelastItem: IPoint, lastItem: IPoint) {
  const currentValue: number = lastItem?.y;

  let difference: number = 0;
  let type: 'fall' | 'rise' = null;
  let percent: number = 0;

  if (prelastItem) {
    difference = Number((lastItem.y - prelastItem.y).toFixed(2));
    type = prelastItem.y > lastItem.y ? 'fall' : 'rise';
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
        // tickTime: lastTick.stockTickTime,
        tickPrice: lastTick.stockTickClose,
      },
    },
  };

  console.log('buysellstockrequest', requestBody);

  return requestBody;
}
