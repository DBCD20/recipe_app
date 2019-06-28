import React, { Component } from 'react';

class RecipeForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            imgUrl: '',
            ingredients: [''],
            instructions: ''
        }
        this.handleChange       = this.handleChange.bind(this);
        this.handleSubmit       = this.handleSubmit.bind(this);
        this.handleChangeIng    = this.handleChangeIng.bind(this);
        this.addIngredient      = this.addIngredient.bind(this);
    }
    handleChange(e){
        this.setState({
           [e.target.name]: e.target.value
    })};
    handleChangeIng(e){
        const index = Number(e.target.name.split('-')[1]);
        const ingredients = this.state.ingredients.map((ing, i) => (
            i === index ? e.target.value : ing
        ));
        this.setState({ ingredients })
    }
    addIngredient(e){
        const code = e.keyCode || e.which;
        if(code === 13){
            this.setState({
                ingredients: [ ...this.state.ingredients, "" ]
            })
        }
    }
    handleSubmit(e){
        e.preventDefault();
        const obj = Object.values(this.state);
    if(obj.every(e => e !== '')){ 
     this.props.addRecipe({ ...this.state });
        this.setState({
            title: '',
            imgUrl: '',
            ingredients: [''],
            instructions: ''
        })
        this.props.toggle()
    }    
        else {
            alert('Please enter a valid recipe')
        }
    }
    render(){
        const inputStyle = {
            width: '100%', 
            height: '2.4rem',
            marginTop: '0.5em', 
            padding: '0 0.8em', 
            marginBottom: '1em'}

        const input = this.state.ingredients.map(( ing, i ) => {
            return (
            <li><input 
                type='text'
                value={ ing }
                name = {`ingredient-${i}`}
                onChange={ this.handleChangeIng }
                style={{ border: 'none', padding: '0.4em 0.8em', background: '#f5f5f5', width: '100%' }}
                onKeyPress={ this.addIngredient }
            />
            
            </li>)
        });
        return (
         <div style={{
            position: 'fixed',
            width: '100%',
            height: '100vh',
            top: '0',
            left: '0%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'rgba(255,255,255, 0.7)'
         }}>
            <section style={{
                position: 'relative',
                width: '400px',
                maxWidth: '100%',
                padding: '2em',
                maxHeight: '500px',
                overflowY: 'auto',
                background: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                fontFamily: 'sans-serif',
                boxShadow: '0 0 20px lightgrey'
            }}>
                <span style={{
                    position: 'absolute',
                    top: '1em',
                    right: '1em',
                    cursor: 'pointer'
                }}
                onClick={ this.props.toggle }
                >
                    <strong>x</strong>
                </span>
                <form onSubmit={ this.handleSubmit }>
                    <label>Name
                        <input style={ inputStyle } 
                        type="text"
                        name="title"
                        value={ this.state.title }
                        onChange = { this.handleChange }
                        autoComplete='off'
                        />
                    </label>
                    <label>Image URL
                        <input style={ inputStyle } 
                        type="text"
                        name='imgUrl'
                        value={ this.state.imgUrl }
                        onChange = { this.handleChange }
                        autoComplete='off'
                        />
                    </label>
                    <section style={{margin: '1.5em auto'}}>Ingredients
                    <ul style={{paddingLeft: '2em'}}>
                        { input }
                    </ul>

                    </section>
                    <label>Instructions
                        <textarea style={ inputStyle } 
                        type="text"
                        name='instructions'
                        value={ this.state.instruction }
                        onChange = { this.handleChange }
                        autoComplete='off'
                        />
                    </label>
                    
                    <button style={{
                        width: '100%', 
                        height: '2.4rem', 
                        border: 'none'
                        }}>Submit
                    </button>
                </form>
            </section>
         </div>   
        
        )}
}


export default RecipeForm;
