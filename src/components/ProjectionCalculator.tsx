'use client'

import { formatNumberAsAmount } from '@/lib/utils'
import { useState } from 'react'
import { Slider } from './ui/slider'

export default function ProjectionCalculator({ acres }: { acres: number }) {
  const [loanPeriod, setLoanPeriod] = useState(25)
  const [loanAPR, setLoanAPR] = useState(5)

  const mw_produced = acres / 5
  const build_cost = mw_produced * 1000000
  const revenue_per_year = mw_produced * 175000
  const annual_loan_payment =
    ((build_cost * loanAPR) /
      1200 /
      (1 - Math.pow(1 + loanAPR / 1200, -loanPeriod * 12))) *
    12

  const solarpunk_revenue_per_year =
    (revenue_per_year - annual_loan_payment - 7500) / 2

  const total_solarpunk_revenue = solarpunk_revenue_per_year * loanPeriod
  const total_revenue = revenue_per_year * loanPeriod
  const total_borrowing_costs = annual_loan_payment * loanPeriod
  const total_build_maintain_costs = build_cost + 7500 * loanPeriod

  return (
    <div>
      <div className="flex flex-row items-center justify-start">
        <span className="font-bold">Loan Period: </span>
        <input
          type="number"
          min="1"
          max="100"
          value={loanPeriod}
          className="ml-2 border-[1px] border-gray-300"
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
          className="ml-2 border-[1px] border-gray-300"
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
  )
}
