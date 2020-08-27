import React from 'react'
import Spence from './Spence'

const SpenceList = ({spences}) => {
  console.log(spences)
  return (
    <div className="spaces-incurred">
      <h2>Spences List</h2>
      {spences.map(spence => (
        <Spence
          key={spence.id}
          type={spence.spenceType}
          amount={spence.spenceAmount}
        />
      ))}

      
    </div>
  )
}

export default SpenceList
