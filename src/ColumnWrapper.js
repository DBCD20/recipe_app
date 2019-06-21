import React from 'react';
import RecipeCard from './RecipeCard';

const ColumnWrapper = props => {
    const recipe = props.recipe.map(food => (
        <RecipeCard imgUrl = { food.imgUrl } title ={ food.title } />
)); 
   return (
    <div style={{
        display: 'flex',
        flex: '0 0 50%',
        flexDirection: 'column'
      }}>
           { recipe }
    </div>
)}

export default  ColumnWrapper;