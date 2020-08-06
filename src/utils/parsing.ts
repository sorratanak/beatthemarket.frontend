import { IPoint, IStockChange } from '../types';

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
