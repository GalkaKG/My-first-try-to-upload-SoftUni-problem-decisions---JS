function calculatorDeposite(input) {
    let depositeSum = Number(input[0]);
    let termOfDeposite = Number(input[1]);
    let annualInterest = Number(input[2]);
    let interest = annualInterest / 100;
    let interestPerYear = depositeSum * interest;
    let interestPerMonth = interestPerYear / 12;
    let interestPerTerm = interestPerMonth * termOfDeposite;
    let sum = depositeSum + interestPerTerm;
  
    console.log(sum);
}
