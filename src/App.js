import React, { Component } from 'react';
import './App.css';
import RecipeWrapper from './RecipeWrapper';
import Header from './Header';
import Navbar from './Navbar';
import RecipeForm from './addRecipeForm';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      formToggle: 'flex'
    }
    this.hideForm = this.hideForm.bind(this)

  }
  hideForm(e){
    e.preventDefault();
    this.setState({
      formToggle: (this.state.formToggle === 'flex' ? 'none' : 'flex')
    })
  }
  render(){
    return (
      <div style={{
        position: 'relative',
        zIndex: '1'
      }}>
        <Navbar toggle={ this.hideForm }/>
        <Header />
        <RecipeWrapper />
        <RecipeForm display={ this.state.formToggle } toggle={ this.hideForm }  />
      </div>
     );
  }
}

export default App;
