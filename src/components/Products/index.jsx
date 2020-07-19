import React, {useState} from 'react'
import { Button } from 'react-bootstrap';
import './Products.css'

function Products ({ addToCart }) {
        const [products] = useState ([
            {
                name: 'Breakfast box',
                cost:'5.99$',
                image: 'https://images.unsplash.com/photo-1569420067112-b57b4f024595?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    
            },
            {
                name: 'Breakfast box',
                cost:'5.99$',
                image: 'https://images.unsplash.com/photo-1569419910356-f63064754fc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
    
            },
            {
                name: 'Snack box ',
                cost:'6.99$',
                image: 'https://images.unsplash.com/photo-1569419882964-7db5d339951b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    
            },
            {
                name: 'Small breakfast bowls',
                cost:'9.99$',
                image: 'https://images.unsplash.com/photo-1570649857669-4ad9f896435d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=703&q=80',
    
            },
            {
                name: 'Weekly breakfasts',
                cost:'15.99$',
                image: 'https://images.unsplash.com/photo-1585735119301-232c1633d439?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    
            },
            {
                name: 'Snack recipe+ingredients',
                cost:'15.99$',
                image: 'https://images.unsplash.com/photo-1585735119407-b037131a352b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    
            }
        ])



    return (
        <>
        <h1 className="products-title">Products</h1>
        <div className="products">
           {products.map((product , index) => (
           <div className="product" key={index}>
              <h3>{product.name}</h3>
              <h4>{product.cost}</h4>
              <img src={product.image} alt={product.name}/>
              <p></p>
              <Button variant="outline-dark" className="add-btn" onClick={() => addToCart(product)}>
                  Add to Cart
               </Button>
        
           </div>
               
               ))}
        </div>
        </>

    )
}

export default Products;