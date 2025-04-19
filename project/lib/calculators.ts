export function calculateSIP(
  monthlyInvestment: number,
  expectedReturn: number,
  years: number
): {
  totalInvestment: number;
  totalReturns: number;
  totalValue: number;
  monthlyData: Array<{ month: number; value: number }>;
} {
  const monthlyRate = expectedReturn / 12 / 100;
  const months = years * 12;
  let totalValue = 0;
  const monthlyData = [];

  for (let i = 1; i <= months; i++) {
    totalValue = (totalValue + monthlyInvestment) * (1 + monthlyRate);
    monthlyData.push({
      month: i,
      value: totalValue,
    });
  }

  const totalInvestment = monthlyInvestment * months;
  const totalReturns = totalValue - totalInvestment;

  return {
    totalInvestment,
    totalReturns,
    totalValue,
    monthlyData,
  };
}

export function calculateLumpsum(
  principal: number,
  expectedReturn: number,
  years: number
): {
  totalInvestment: number;
  totalReturns: number;
  totalValue: number;
  yearlyData: Array<{ year: number; value: number }>;
} {
  const yearlyRate = expectedReturn / 100;
  const yearlyData = [];
  let totalValue = principal;

  for (let i = 1; i <= years; i++) {
    totalValue = totalValue * (1 + yearlyRate);
    yearlyData.push({
      year: i,
      value: totalValue,
    });
  }

  const totalReturns = totalValue - principal;

  return {
    totalInvestment: principal,
    totalReturns,
    totalValue,
    yearlyData,
  };
}

export function calculateSWP(
  principal: number,
  expectedReturn: number,
  monthlyWithdrawal: number,
  years: number
): {
  totalWithdrawals: number;
  remainingAmount: number;
  monthlyData: Array<{ month: number; value: number }>;
} {
  const monthlyRate = expectedReturn / 12 / 100;
  const months = years * 12;
  let balance = principal;
  const monthlyData = [];

  for (let i = 1; i <= months && balance > 0; i++) {
    balance = (balance - monthlyWithdrawal) * (1 + monthlyRate);
    monthlyData.push({
      month: i,
      value: Math.max(0, balance),
    });
  }

  return {
    totalWithdrawals: monthlyWithdrawal * months,
    remainingAmount: Math.max(0, balance),
    monthlyData,
  };
}

export function calculateEMI(
  principal: number,
  interestRate: number,
  years: number
): {
  emi: number;
  totalInterest: number;
  totalPayment: number;
  monthlyData: Array<{ month: number; principal: number; interest: number; balance: number }>;
} {
  const monthlyRate = interestRate / 12 / 100;
  const months = years * 12;
  const emi =
    (principal *
      monthlyRate *
      Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1);

  let balance = principal;
  const monthlyData = [];

  for (let i = 1; i <= months; i++) {
    const interest = balance * monthlyRate;
    const principalPaid = emi - interest;
    balance -= principalPaid;

    monthlyData.push({
      month: i,
      principal: principalPaid,
      interest,
      balance: Math.max(0, balance),
    });
  }

  const totalPayment = emi * months;
  const totalInterest = totalPayment - principal;

  return {
    emi,
    totalInterest,
    totalPayment,
    monthlyData,
  };
}