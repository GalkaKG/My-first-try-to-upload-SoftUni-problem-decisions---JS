function foodDelivery(input) {
  let chickenMenu = Number(input[0]);
  let fishMenu = Number(input[1]);
  let vegetarianMenu = Number(input[2]);
  let priceChickenM = 10.35;
  let priceFishM = 12.40;
  let priceVegetarianM = 8.15;
  let menu = fishMenu * priceFishM + chickenMenu * priceChickenM + vegetarianMenu * priceVegetarianM;
  let dessert =  menu * 0.20;
  let bill = menu + dessert + 2.50;

  console.log(bill)
}
