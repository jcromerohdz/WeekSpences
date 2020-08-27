import React, { useState, useEffect } from 'react';
import Question from './components/Question';
import Form from './components/Form';
import SpenceList from './components/SpenceList';
import BudgetControl from './components/BudgetControl';

function App() {

  const [budget, saveBudget] = useState(0);
  const [bgtLeft, saveBgtLeft] = useState(0);
  const [showQuestion, updateQuestion] = useState(true);
  const [spences, saveSpences] = useState([]);
  const [spence, saveSpence] = useState({});
  const [createSpence, saveCreateSpence] = useState(false);

  // useEffect for updating our budget left
  useEffect(() => {
    if (createSpence) {
      saveSpences([
      ...spences,
      spence
      ])
      
      // Substract from actual budget
      const budgetLeft = bgtLeft - spence.spenceAmount;
      saveBgtLeft(budgetLeft);

      // reset to false
      saveCreateSpence(false);
    }
  }, [spence, createSpence, spences, bgtLeft])


  return (
    <div className="container"> 
      <header>
        <h1>Week Spences</h1>
        <div className="main-content content">
          {showQuestion ? (
            <Question
              saveBudget={saveBudget}
              saveBgtLeft={saveBgtLeft}
              updateQuestion={updateQuestion}
            />
          ) : (

            <div className="row">
              <div className="one-half column">
                  <Form
                    saveSpence={saveSpence}
                    saveCreateSpence={saveCreateSpence}
                  />
              </div>
              <div className="one-half column">
                  <SpenceList spences={spences}/>
                  <BudgetControl
                    budget={budget}
                    bgtLeft={bgtLeft}
                  />
              </div>
            </div>
          )}

        </div>
      </header>
    </div>
  );
}

export default App;
