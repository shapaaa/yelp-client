import React, { createContext, useContext, useState } from 'react';

export const RestaurantContext = createContext();

export const RestaurantContextProvider = (props) => {
	const [restaurants, setRestaurants] = useState([]);
	const [selectedRestaurant, setSelectedRestaurant] = useState(null);
	return (
		<RestaurantContext.Provider
			value={{ restaurants, setRestaurants, selectedRestaurant, setSelectedRestaurant }}>
			{props.children}
		</RestaurantContext.Provider>
	);
};
