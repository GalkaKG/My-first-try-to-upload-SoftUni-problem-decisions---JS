function fishTank (input) {
    let longSm = Number(input[0]);
    let width = Number(input[1]);
    let high = Number(input[2]);
    let percentage = Number(input[3]);
    let volumeTankSm = longSm * width * high;
    let volumeTankLitres = volumeTankSm * 0.001;
    let needLitres = volumeTankLitres * (1 - 0.17);

    console.log(needLitres);
}
