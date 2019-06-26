import React, { Component } from 'react';
import './App.css';
import RecipeWrapper from './RecipeWrapper';
import Header from './Header';
import Navbar from './Navbar';
import RecipeForm from './addRecipeForm';
import Recipe from './Recipe';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      formToggle: false,
      appPosition: 'relative',
      viewRecipe: {},
      showRecipe: false,
      searchItem: '',

      recipeList: [
        {
          imgUrl: "https://images.pexels.com/photos/277253/pexels-photo-277253.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&w=500",
          title: "Lollipop fruitcake cookie",
          ingredients: ['Chocolate', 'bar', 'tiramisu', 'bear', 'claw', 'marzipan' ],
          instructions: 'Chocolate bar tiramisu bear claw marzipan sesame snaps caramels sweet. Cotton candy sweet bear claw jujubes gummies. Jujubes toffee marzipan liquorice chocolate bar oat cake tiramisu. Tootsie roll gummies tart. Cake pie toffee dessert jujubes. Cheesecake cake macaroon cookie biscuit cotton candy chupa chups sweet roll. Cake macaroon jelly dragée dragée sweet roll cheesecake liquorice. Cookie dessert macaroon cupcake pie. Chocolate cake topping pastry marshmallow cotton candy. Cheesecake liquorice bonbon sweet roll chocolate sweet roll. Cake chocolate bar icing biscuit oat cake toffee. Chocolate lollipop sweet. Jujubes chupa chups marzipan jelly beans macaroon.'
        },
        {
          imgUrl: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&w=500",
          title: "Danish cake cookie",
          ingredients: ['Chocolate', 'bar', 'tiramisu', 'bear', 'claw', 'marzipan' ],
          instructions: 'Chocolate bar tiramisu bear claw marzipan sesame snaps caramels sweet. Cotton candy sweet bear claw jujubes gummies. Jujubes toffee marzipan liquorice chocolate bar oat cake tiramisu. Tootsie roll gummies tart. Cake pie toffee dessert jujubes. Cheesecake cake macaroon cookie biscuit cotton candy chupa chups sweet roll. Cake macaroon jelly dragée dragée sweet roll cheesecake liquorice. Cookie dessert macaroon cupcake pie. Chocolate cake topping pastry marshmallow cotton candy. Cheesecake liquorice bonbon sweet roll chocolate sweet roll. Cake chocolate bar icing biscuit oat cake toffee. Chocolate lollipop sweet. Jujubes chupa chups marzipan jelly beans macaroon.'
        },
        {
          imgUrl: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&w=500",
          title: "Cotton candy pastry",
          ingredients: ['Chocolate', 'bar', 'tiramisu', 'bear', 'claw', 'marzipan' ],
          instructions: 'Chocolate bar tiramisu bear claw marzipan sesame snaps caramels sweet. Cotton candy sweet bear claw jujubes gummies. Jujubes toffee marzipan liquorice chocolate bar oat cake tiramisu. Tootsie roll gummies tart. Cake pie toffee dessert jujubes. Cheesecake cake macaroon cookie biscuit cotton candy chupa chups sweet roll. Cake macaroon jelly dragée dragée sweet roll cheesecake liquorice. Cookie dessert macaroon cupcake pie. Chocolate cake topping pastry marshmallow cotton candy. Cheesecake liquorice bonbon sweet roll chocolate sweet roll. Cake chocolate bar icing biscuit oat cake toffee. Chocolate lollipop sweet. Jujubes chupa chups marzipan jelly beans macaroon.'
        },
        {
          imgUrl: "https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          title: "Milkyway",
          ingredients: ['Chocolate', 'bar', 'tiramisu', 'bear', 'claw', 'marzipan' ],
          instructions: 'Chocolate bar tiramisu bear claw marzipan sesame snaps caramels sweet. Cotton candy sweet bear claw jujubes gummies. Jujubes toffee marzipan liquorice chocolate bar oat cake tiramisu. Tootsie roll gummies tart. Cake pie toffee dessert jujubes. Cheesecake cake macaroon cookie biscuit cotton candy chupa chups sweet roll. Cake macaroon jelly dragée dragée sweet roll cheesecake liquorice. Cookie dessert macaroon cupcake pie. Chocolate cake topping pastry marshmallow cotton candy. Cheesecake liquorice bonbon sweet roll chocolate sweet roll. Cake chocolate bar icing biscuit oat cake toffee. Chocolate lollipop sweet. Jujubes chupa chups marzipan jelly beans macaroon.'
        },
        {
          imgUrl: "https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          title: "Danish fruitcake cookie",
          ingredients: ['Chocolate', 'bar', 'tiramisu', 'bear', 'claw', 'marzipan' ],
          instructions: 'Chocolate bar tiramisu bear claw marzipan sesame snaps caramels sweet. Cotton candy sweet bear claw jujubes gummies. Jujubes toffee marzipan liquorice chocolate bar oat cake tiramisu. Tootsie roll gummies tart. Cake pie toffee dessert jujubes. Cheesecake cake macaroon cookie biscuit cotton candy chupa chups sweet roll. Cake macaroon jelly dragée dragée sweet roll cheesecake liquorice. Cookie dessert macaroon cupcake pie. Chocolate cake topping pastry marshmallow cotton candy. Cheesecake liquorice bonbon sweet roll chocolate sweet roll. Cake chocolate bar icing biscuit oat cake toffee. Chocolate lollipop sweet. Jujubes chupa chups marzipan jelly beans macaroon.'
        },
        {
          imgUrl: "https://images.pexels.com/photos/255501/pexels-photo-255501.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&w=500",
          title: "Cotton pastry",
          ingredients: ['Chocolate', 'bar', 'tiramisu', 'bear', 'claw', 'marzipan' ],
          instructions: 'Chocolate bar tiramisu bear claw marzipan sesame snaps caramels sweet. Cotton candy sweet bear claw jujubes gummies. Jujubes toffee marzipan liquorice chocolate bar oat cake tiramisu. Tootsie roll gummies tart. Cake pie toffee dessert jujubes. Cheesecake cake macaroon cookie biscuit cotton candy chupa chups sweet roll. Cake macaroon jelly dragée dragée sweet roll cheesecake liquorice. Cookie dessert macaroon cupcake pie. Chocolate cake topping pastry marshmallow cotton candy. Cheesecake liquorice bonbon sweet roll chocolate sweet roll. Cake chocolate bar icing biscuit oat cake toffee. Chocolate lollipop sweet. Jujubes chupa chups marzipan jelly beans macaroon.'
        }
      ]
    }
    this.hideForm      = this.hideForm.bind(this);
    this.addRecipe     = this.addRecipe.bind(this);
    this.disableScroll = this.disableScroll.bind(this);
    this.getRecipe     = this.getRecipe.bind(this);
    this.closeRecipe   = this.closeRecipe.bind(this);
    this.searchRecipe  = this.searchRecipe.bind(this);
  }
  hideForm(){
    this.setState({
      formToggle: (this.state.formToggle ? false : true)
    })};

  disableScroll(){
    this.setState({
      appPosition: (this.state.appPosition === 'static' ? 'fixed' : 'static'),
      formToggle: 'none'
    })};

  addRecipe(recipe){
    this.setState({
      recipeList: [...this.state.recipeList, recipe]
    })};

  getRecipe(title){
    this.setState({
      viewRecipe: this.state.recipeList.find(d => d.title === title),
      showRecipe: true,
      appPosition: 'fixed'
    })};

  closeRecipe(){
    this.setState({
      viewRecipe: '',
      showRecipe: false,
      appPosition: 'relative'
    })};
searchRecipe(e){
  this.setState({
    searchItem: e.target.value
  })
}
  getListOfRecipe(){
    let { searchItem, recipeList } = this.state;
    if(searchItem !== ''){
      return recipeList.filter(e => e.title.indexOf(searchItem) !== -1)
    }
    return recipeList;
  }

  render(){
    return (
      <div style={{
        position: this.state.appPosition,
        zIndex: '1'
      }}>
        <Navbar toggle={ this.hideForm }/>
        <Header search={ this.searchRecipe } searchItem={this.state.searchItem} />
        <RecipeWrapper recipeList={ this.getListOfRecipe() } getRecipe={ this.getRecipe }/>
        { 
          this.state.formToggle &&
          <RecipeForm toggle={ this.hideForm } addRecipe={ this.addRecipe } />
        }
        {
          this.state.showRecipe &&
          <Recipe closeRecipe={ this.closeRecipe } viewRecipe = { this.state.viewRecipe }/> 
        }
      </div>
     );
  }
}

export default App;
