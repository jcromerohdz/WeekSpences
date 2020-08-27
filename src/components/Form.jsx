import React, { useState } from 'react'
import Error from './Error';
import shortid from 'shortid';

const Form = ({saveSpence, saveCreateSpence}) => {

  const [spenceType, saveAmountType] = useState('');
  const [spenceAmount, saveSpenceAmount] = useState(0);
  const [error, saveError] = useState(false);

  const addSpence = e => {
    e.preventDefault();

    // validation
    if (spenceAmount < 1 || isNaN(spenceAmount || spenceType.trim() === '')) {
      saveError(true);
      return;
    }

    saveError(false);
    
    // Build spence object
    const spence = {
      spenceType,
      spenceAmount,
      id: shortid.generate()
    }
    // console.log(spance);


    // Put spance in the App component
    saveSpence(spence);
    saveCreateSpence(true);


    // Clear the form
    saveAmountType('');
    saveSpenceAmount(0)
  }

  return (
    <form onSubmit={addSpence}>
      <h2>Add your spences</h2>
      { error ? <Error msg="Both Fields are required or Amount is incorrect!" /> : null }
      
      <div className="field">
        <label>Spence Type</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="eg. Transport"
          value={spenceType}
          onChange={e => saveAmountType(e.target.value)}
        />

        <label>Spence Amount</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="eg. 50"
          value={spenceAmount}
          onChange={e => saveSpenceAmount(parseInt(e.target.value), 10)}
        />
      </div>
      <input
        type="submit"
        className="button-primary u-full-width"
        value="Add Spence"
      />
    </form>
  )
}

export default Form;
