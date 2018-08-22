export const BUY = 'BUY';
export const EAT = 'EAT';

export function buy(amount) {
  return { type: BUY, data: amount };
}

export function eat(amount) {
  return { type: EAT, data: amount };
}
