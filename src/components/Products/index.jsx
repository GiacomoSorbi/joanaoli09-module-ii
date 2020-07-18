import React, {useState} from 'react'

function Products ({ addToCart }) {
        const [products] = useState ([
            {
                name: 'Breakfast  ',
                cost:'9.99$',
                image: 'https://images.unsplash.com/photo-1569420067112-b57b4f024595?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    
            },
            {
                name: 'Breakfast box ',
                cost:'8.99$',
                image: 'https://images.unsplash.com/photo-1569419910356-f63064754fc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
    
            },
            {
                name: 'Snack box ',
                cost:'6.99$',
                image: 'https://images.unsplash.com/photo-1569419882964-7db5d339951b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    
            },
            {
                name: '4 small breakfast bowls ',
                cost:'9.99$',
                image: 'https://images.unsplash.com/photo-1570649857669-4ad9f896435d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=703&q=80',
    
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
              <button onClick={() => addToCart(product)}>
                  Add to Cart
               </button>
        
           </div>
               
               ))}
        </div>
        </>

    )
}

export default Products;