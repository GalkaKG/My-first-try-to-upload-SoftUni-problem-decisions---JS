function repainting (input) {
    let nylon = Number(input[0]) + 2;
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hoursForWork = Number(input[3]);
    let priceForNylon = nylon * 1.50;
    let priceForPaint = (paint + (paint * 0.10)) * 14.50;
    let priceForThinner = thinner * 5;
    let sum = priceForNylon + priceForThinner + priceForPaint + 0.40
    work = (sum * 0.30) * hoursForWork;
    let sumForAll = sum + work;

    console.log(sumForAll)
}
