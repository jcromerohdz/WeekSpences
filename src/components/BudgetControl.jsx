import React, { Fragment } from 'react'
import {budgetCheck} from '../helper.js';

const BudgetControl = ({budget, bgtLeft}) => {
  return (
    <Fragment>
      <div className="alert alert-primary">
        Your Budget: $ {budget}
      </div>
      <div className={budgetCheck(budget, bgtLeft)}>
        Your Left Budget: $ {bgtLeft}
      </div>
    </Fragment>
  )
}

export default BudgetControl
