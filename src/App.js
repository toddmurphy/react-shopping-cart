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
		const deltedItem = cart.filter(cart => cart.id !== id)
		setCart(deltedItem)
	};


	return (
		<div className="App">

			<CartContext.Provider value={cart}>
				<Navigation />
				{/* Routes */}
				<ProductContext.Provider value={{ products, addItem, removeItem }}>
					<Route exact path="/" component={Products} />
					<Route path="/cart" component={ShoppingCart} />
				</ProductContext.Provider>
			</CartContext.Provider>
		</div>
	);
}

export default App;
