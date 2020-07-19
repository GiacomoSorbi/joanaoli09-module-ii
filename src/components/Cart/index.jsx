import React from 'react'
import {Button} from 'react-bootstrap';

function Cart ({ cart, removeFromCart }) {

 
    const getTotalCost = (productList) => (
        productList.reduce((totalCost, { cost: itemCost }) => totalCost += parseFloat(itemCost), 0)
    );

    return (
    <>
            <h1>Cart</h1>
               <div className="products">
               {cart.map((product , index) => (
               <div className="product" key={index}>
                  <h3>{product.name}</h3>
                  <h4>{product.cost}</h4>
                  <img src={product.image} alt={product.name}/>
                  <div>
                      <p></p>
                  <Button variant="dark" onClick={() => removeFromCart(product)}>
                      Remove
                   </Button>
                   </div>
               </div> 
                   ))}
            </div>
            
            <div> 
                       <h3> Total :{getTotalCost(cart)}</h3>
               
                </div>
            </>
    )
}

export default Cart;