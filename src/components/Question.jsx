import React, { Fragment, useState } from 'react'
import Error from './Error';

const Question = ({ saveBudget, saveBgtLeft, updateQuestion }) => {

  const [amount, saveAmount] = useState(0);
  const [error, saveError] = useState(false);

  const defineBudget = (e) => {
    console.log(parseInt(e.target.value))
    saveAmount(parseInt(e.target.value, 10));

  }

  const addBudget = e => {
    e.preventDefault();

    // Validate
    if (amount < 1 || isNaN( amount )) {
      saveError(true);
      return
    }

    saveError(false);
    saveBudget(amount);
    saveBgtLeft(amount);
    updateQuestion(false);

  }

  return (
    <Fragment>
      <h2>Whats Your Budget?</h2>
      { error ? <Error msg="The budget is incorrect"/> : null}
      <form onSubmit={addBudget}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Put your week budget"
          onChange = {defineBudget}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Define Budget"
        />

      </form>
      
    </Fragment>
  )
}

export default Question
