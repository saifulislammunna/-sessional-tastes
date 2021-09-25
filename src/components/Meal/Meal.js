import React from 'react';
import './Meal.css'
const Meal = () => {
    return (
        <div className="meal-container">
            <div className="food-container">
                <h2>Food:</h2> 
            </div>
            <div className="cart-container">
                <h3>Order Summary  </h3>
                <h3>Items Ordered: </h3>
            </div>
             
        </div>
    );
};

export default Meal;