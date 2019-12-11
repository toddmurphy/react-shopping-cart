import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item])
	};

	//Remove item from ShoppingCartItem
	const removeItem = (id) => {
		setCart(cart.filter(cart => cart.id !== id))

	};


	return (
		<CartContext.Provider value={{ cart, removeItem }}>
			<ProductContext.Provider value={{ products, addItem }}>
				<div className="App">
					<Navigation />
					{/* Routes */}
					<Route exact path="/" component={Products} />
					<Route path="/cart" component={ShoppingCart} />
				</div>
			</ProductContext.Provider>
		</CartContext.Provider>
	);
}

export default App;
