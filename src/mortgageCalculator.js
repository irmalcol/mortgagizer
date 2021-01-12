export default class MortgageCalculator {
  // InterestRate must be annual interest rate in percentage form
  constructor(principal, interestRate, annualCompoundingPeriods = 2) {
    this.interestRate = interestRate;
    this.ear = this.calculateEar(this.interestRate, annualCompoundingPeriods);
    this.effectiveMonthlyInterestRate = this.ear / 12;
    this.originalPrincipal = principal;
  }

  detailedRowTemplate = {
    year: 0,
    month: 0,
    payment: 0,
    interestPayment: 0,
    principalPayment: 0,
    remainingPrincipal: 0,
    totalCOB: 0
  };

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
    const yearCount = Math.floor(monthCount++ / 12);
    const interestPaymentPortion = this.calculateInterestPaymentPortion(
      startingPrincipal,
      this.effectiveMonthlyInterestRate
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
      interestPayment: interestPaymentPortion,
      principalPayment: principalPaidDown,
      remainingPrincipal: remainingPrincipal,
      totalCOB: totalCOB
    };
  }

  generateMortgageData(regularPayment) {
    const rows = [];
    let row = this.detailedRowTemplate;
    row.payment = regularPayment;
    row.remainingPrincipal = this.originalPrincipal;

    while (row.remainingPrincipal > 0) {
      row = this.generateDetailedLine(
        row.month,
        row.remainingPrincipal,
        row.payment,
        row.totalCOB
      );
      rows.push(row);

      if (row.month > 500) {
        console.warn(
          "Too many months in mortgage. Calculation probably unstable. Aborting."
        );
        break;
      }
    }

    console.log(rows);

    return rows;
  }
}
