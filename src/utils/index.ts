import currencyFormatter from 'currency-formatter';

export function isNumericChar(char: string) {
  return /\d/.test(char);
}

export function getMoneyFormat(value: number | string, precision: number = 2) {
  return currencyFormatter.format(value, {
    symbol: '$',
    decimal: '.',
    thousand: "'",
    precision,
    format: '%s %v', // %s is the symbol and %v is the value
  });
}
