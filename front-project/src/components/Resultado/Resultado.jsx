import React from 'react'
import Card from '../Card/Card';

const Resultado = ({productsResult}) => {
  return (
    productsResult.map(product =>
        <Card product={product} />
        )
  )
}

export default Resultado