'useClient';
import React from 'react'

const AddToCart = () => {
  return (
    <div>
        <button 
          onClick={() => console.log('button click')}
          className="btn btn-primary"
        >
            Add to cart
        </button>
    </div>
  )
}

export default AddToCart
