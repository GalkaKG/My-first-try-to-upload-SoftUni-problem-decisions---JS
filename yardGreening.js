function yardGreening(input) {
  let kvadratsGreen = input[0];
  let priceKvM = 7.61
  let sum = kvadratsGreen * priceKvM
  let discount = 0.18 * sum
  let finallPrice = sum - discount

  console.log(`The final price is: ${finallPrice} lv.
  The discount is: ${discount} lv.`)
}
