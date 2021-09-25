import React, { useEffect, useState } from 'react';
import './Meal.css'

 
const Meal = () => {
    const [products, setProducts] = useState([]);
  useEffect(() => {
      
      fetch( 'https://www.themealdb.com/api/json/v1/1/search.php?s')
      .then(res => res.json())
      .then(data => setProducts(data.meals))
  },[])
    return (
        <div className="meal-container">
            <div className="food-container">
                <h2>Food:{products.length} </h2> 
                 {
                     products.map(product => console.log(product))
                 }
            </div>
            <div className="cart-container">
                <h3>Order Summary  </h3>
                <h3>Items Ordered: </h3>
            </div>
             
        </div>
    );
};

export default Meal;