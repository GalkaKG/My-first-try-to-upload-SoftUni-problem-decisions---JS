function suppliesForSchool (input) {
  let pens = Number(input[0]);
  let markers = Number(input[1]);
  let detergent = Number(input[2]);
  let percentDiscount = Number(input[3]);
  let pricePens = pens * 5.80;
  let priceMarkers = markers * 7.20;
  let priceDetergent = detergent * 1.20; 
  let priceForAll = pricePens + priceDetergent + priceMarkers;
  let sum = priceForAll - (priceForAll * 0.25);

  console.log(sum)  
}
