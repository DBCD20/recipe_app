import React, { Component } from 'react';
import ColumnWrapper from './ColumnWrapper';

class RecipeWrapper extends Component {
      render(){
        const recipeList  = this.props.recipeList.slice();
        const recipes1    = recipeList.filter((food, i) => i % 2 === 0)
        const recipes2    = recipeList.filter((food, i) => i % 2 !== 0)
        return (
          <div style={{
              display: 'flex',
              justifyContent: 'center',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              <ColumnWrapper recipe={ recipes1 } getRecipe={ this.props.getRecipe } />
              <ColumnWrapper recipe={ recipes2 } getRecipe={ this.props.getRecipe } />
            </div>
      )}

}

export default RecipeWrapper;