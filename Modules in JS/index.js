import { calculateTax } from "./calculateTax.js";
import { roundMoney } from "./roundMoney.js";

for (let x = 0; x < 10; ++x) {
  const invoiceTotal = Math.random() * 1000;
  const { postTax, taxRate } = calculateTax(invoiceTotal);
  console.log(`Total: ${roundMoney(invoiceTotal)} X ${taxRate} = ${postTax}`);
}
