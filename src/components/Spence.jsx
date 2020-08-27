import React from 'react'

const Spence = ({type, amount}) => {
  console.log("Hola")
  console.log(amount)
  return (
    <li className="spences">
      <p>
        {type}
        <span className="spence">$ {amount} </span>
      </p>
      
    </li>
  )
}

export default Spence
