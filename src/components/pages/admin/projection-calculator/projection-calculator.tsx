'use client';

import { useState } from 'react';

import { getProjectionsFromAcres } from '@/utils/projections';

import { formatNumberAsAmount } from '@/lib/utils';

function ProjectionCalculator({ acres }: { acres: number }) {
  const [loanPeriod, setLoanPeriod] = useState(25);
  const [loanAPR, setLoanAPR] = useState(5);

  const {
    mw_produced,
    build_cost,
    revenue_per_year,
    annual_loan_payment,
    solarpunk_revenue_per_year,
    total_solarpunk_revenue,
    total_revenue,
    total_borrowing_costs,
    total_build_maintain_costs,
  } = getProjectionsFromAcres(acres, loanPeriod, loanAPR);

  return (
    <div>
      <div className="flex flex-row items-center justify-start">
        <span className="font-bold">Loan Period: </span>
        <input
          type="number"
          min="1"
          max="100"
          value={loanPeriod}
          className="border-gray-300 ml-2 border-[1px]"
          onChange={(e) => setLoanPeriod(parseInt(e.target.value))}
        />
        years
      </div>
      <div className="flex flex-row items-center justify-start">
        <span className="font-bold">Loan APR: </span>
        <input
          type="number"
          min="1"
          max="100"
          value={loanAPR}
          className="border-gray-300 ml-2 border-[1px]"
          onChange={(e) => setLoanAPR(parseInt(e.target.value))}
        />
        %
      </div>
      <br />
      <div>
        <span className="font-bold">MW Produced Yearly: </span>
        {mw_produced.toFixed(2)}
      </div>
      <div>
        <span className="font-bold">Total Revenue: </span>$
        {formatNumberAsAmount(total_revenue.toFixed(0))}
      </div>
      <div>
        <span className="font-bold">Total Build Costs: </span>$
        {formatNumberAsAmount(build_cost.toFixed(0))}
      </div>
      <div>
        <span className="font-bold">Total Build and Maintenance Costs: </span>$
        {formatNumberAsAmount(total_build_maintain_costs.toFixed(0))}
      </div>
      <div>
        <span className="font-bold">Total Borrowing Costs: </span>$
        {formatNumberAsAmount(total_borrowing_costs.toFixed(0))}
      </div>
      <div>
        <span className="font-bold">Total Landowner Revenue: </span>$
        {formatNumberAsAmount(total_solarpunk_revenue.toFixed(0))}
      </div>
      <div>
        <span className="font-bold">Total Solarpunk Revenue: </span>$
        {formatNumberAsAmount(total_solarpunk_revenue.toFixed(0))}
      </div>
    </div>
  );
}

export default ProjectionCalculator;
