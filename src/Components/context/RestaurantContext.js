import React, { createContext, useState } from 'react';

export const RestaurantContext = createContext();

export const RestaurantContextProvider = (props) => {
	//** context object for storing all restaurants
	const [restaurants, setRestaurants] = useState([]);
	//** context object for storing detail of a selected restaurant
	const [selectedRestaurant, setSelectedRestaurant] = useState(null);
	return (
		<RestaurantContext.Provider
			value={{ restaurants, setRestaurants, selectedRestaurant, setSelectedRestaurant }}>
			{props.children}
		</RestaurantContext.Provider>
	);
};
