import React, {useState} from 'react'
import './ProductsPage.css'
import Products from '../../components/Products'
import Cart from '../../components/Cart'
import { Button } from 'react-bootstrap';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';


function ProductsPage() {

    const [cart, setCart] = useState ([]);

    const [page, setPage] = useState (PAGE_PRODUCTS);


    const addToCart = (product) => {
        setCart ([...cart, {...product}])
    }

    const removeFromCart = (productToRemove) => {
        setCart(cart.filter(product => product !== productToRemove))
    }

    const navigateTo = (nextPage) => {
        setPage(nextPage);
    };


    return (
            <div className="productspage">
            <header>
                <Button className="cart-btn" variant="light" size="lg" onClick={()=> navigateTo(PAGE_CART)}>
                    Go to Cart ({cart.length})
                </Button>
                <Button className="products-btn" variant="light" size="lg" onClick={()=> navigateTo(PAGE_PRODUCTS)}>
                    View Products
                </Button>
            </header>
            {page === PAGE_PRODUCTS && <Products addToCart={addToCart}/>}
            {page === PAGE_CART && <Cart cart={cart} removeFromCart={removeFromCart} />}

            </div>
    );

    
};

export default ProductsPage;