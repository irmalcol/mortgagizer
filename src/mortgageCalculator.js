export default class MortgageCalculator {
  // InterestRate must be annual interest rate in decimal form
  constructor(principal, interestRate, annualCompoundingPeriods = 2) {
    this.ear = this.calculateEar(interestRate, annualCompoundingPeriods);
    this.originalPrincipal = principal;
  }

  // EAR is effective annual interest rate
  calculateEar(interestRate, annualCompoundingPeriods) {
    const ear =
      Math.pow(
        1 + interestRate / annualCompoundingPeriods,
        annualCompoundingPeriods
      ) - 1;
    return ear;
  }

  calculateInterestPaymentPortion(principal, ear) {
    return principal * ear;
  }

  calculatePrincipalPaymentPortion(payment, interestPayment) {
    return payment - interestPayment;
  }

  generateDetailedLine(
    monthCount,
    startingPrincipal,
    regularPayment,
    startingCOB,
    extraPayment = 0
  ) {
    const yearCount = monthCount % 12;
    const interestPaymentPortion = this.calculateInterestPaymentPortion(
      startingPrincipal,
      this.ear
    );
    const principalPaymentPortion = this.calculatePrincipalPaymentPortion(
      regularPayment,
      interestPaymentPortion
    );
    const totalCOB = startingCOB + interestPaymentPortion;
    const payment = regularPayment + extraPayment;
    const principalPaidDown = principalPaymentPortion + extraPayment;
    const remainingPrincipal = startingPrincipal - principalPaidDown;

    return {
      year: yearCount,
      month: monthCount,
      payment: payment,
      principalPaidDown: principalPaidDown,
      remainingPrincipal: remainingPrincipal,
      totalCOB: totalCOB
    };
  }

  generateMortgageData(regularPayment) {
    const rows = [];
    let principal = this.originalPrincipal;
    let month = 1;
    let costOfBorrowing = 0;
    let row = this.generateDetailedLine(
      month,
      principal,
      regularPayment,
      costOfBorrowing
    );
    console.log(row);
    rows.push(row);
  }
}
