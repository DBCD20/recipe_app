import React, { Component } from 'react';
import ColumnWrapper from './ColumnWrapper';

class RecipeWrapper extends Component {
    
      render(){
        let recipeList = [
          {
            imgUrl: "https://images.pexels.com/photos/277253/pexels-photo-277253.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&w=500",
            title: "Lollipop fruitcake cookie"
          },
          {
            imgUrl: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&w=500",
            title: "Danish fruitcake cookie"
          },
          {
            imgUrl: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&w=500",
            title: "Cotton candy pastry"
          },
    
          {
            imgUrl: "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            title: "Lollipop fruitcake cookie"
          },
          {
            imgUrl: "https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
            title: "Danish fruitcake cookie"
          },
          {
            imgUrl: "https://images.pexels.com/photos/255501/pexels-photo-255501.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&w=500",
            title: "Cotton candy pastry"
          },
        ]
        const recipes1 = recipeList.filter((food, i) => i % 2 === 0)
        const recipes2 = recipeList.filter((food, i) => i % 2 !== 0)
        return (
          <div style={{
              display: 'flex',
              justifyContent: 'center',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              <ColumnWrapper recipe={ recipes1 } />
              <ColumnWrapper recipe={ recipes2 } />
            </div>
      )}

}

export default RecipeWrapper;