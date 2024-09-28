import { Acre } from './types';

export const getTotalAreaFromAcreData = (acreData: Acre[]) => {
  return acreData.reduce((total, acre) => total + acre.area, 0);
};

export const getProjectionsFromAcres = (acres: number, loanPeriod: number, loanAPR: number) => {
  const mw_produced = acres / 5;
  const build_cost = mw_produced * 1000000;
  const revenue_per_year = mw_produced * 175000;
  const annual_loan_payment =
    ((build_cost * loanAPR) / 1200 / (1 - Math.pow(1 + loanAPR / 1200, -loanPeriod * 12))) * 12;

  const solarpunk_revenue_per_year = (revenue_per_year - annual_loan_payment - 7500) / 2;

  const total_solarpunk_revenue = solarpunk_revenue_per_year * loanPeriod;
  const total_revenue = revenue_per_year * loanPeriod;
  const total_borrowing_costs = annual_loan_payment * loanPeriod;
  const total_build_maintain_costs = build_cost + 7500 * loanPeriod;

  return {
    mw_produced,
    build_cost,
    revenue_per_year,
    annual_loan_payment,
    solarpunk_revenue_per_year,
    total_solarpunk_revenue,
    total_revenue,
    total_borrowing_costs,
    total_build_maintain_costs,
  };
};
