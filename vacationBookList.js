function vacantionBookList (input) {
    let page = Number(input[0]);
    let pageForHour = Number(input[1]);
    let days = Number(input[2]);
    let hoursForTheBook = page / pageForHour;
    let hoursPerDay = hoursForTheBook / days;
  
    console.log(hoursPerDay);

}
