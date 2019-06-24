import React, { Component } from 'react';

class RecipeForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: '',
            imgUrl: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e){
        this.setState({
           [e.target.name]: e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        const { title, imgUrl } = this.state;

if(title !== '' && imgUrl !== ''){ 
     this.props.addRecipe({ ...this.state });
        this.setState({
            title: '',
            imgUrl: ''
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
        return (
         <div style={{
            position: 'fixed',
            width: '100%',
            height: '100vh',
            top: '0',
            left: '0%',
            display: this.props.display,
            justifyContent: 'center',
            alignItems: 'center',
            background: 'rgba(255,255,255, 0.7)'
         }}>
            <section style={{
                position: 'relative',
                width: '400px',
                maxWidth: '100%',
                padding: '2em',
                height: '300px',
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
