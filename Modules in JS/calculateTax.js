import { roundMoney } from "./roundMoney.js";

const lowRate = 0.05;
const highRate = 0.095;
export function calculateTax(totalPrice) {
  let taxRate = 0;

  if (totalPrice >= 10 && totalPrice < 100) {
    taxRate = lowRate;
  } else {
    taxRate = highRate;
  }

  const preTax = roundMoney(totalPrice);
  const postTax = roundMoney(preTax * taxRate + preTax);

  return {
    preTax,
    postTax,
    taxRate,
  };
}
