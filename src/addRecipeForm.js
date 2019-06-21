import React from 'react';
const RecipeForm = props => {
    
return (
 <div style={{
    position: 'fixed',
    width: '100%',
    height: '100vh',
    top: '0',
    left: '0%',
    display: props.display,
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
        onClick={ props.toggle }
        >
            <strong>x</strong>
        </span>
        <form >
            <label>Name
                <input style={{width: '100%', height: '2.4rem',marginTop: '0.5em', padding: '0 0.8em', marginBottom: '1em'}} type="text" />
            </label>
            <label>Image URL
                <input style={{width: '100%', height: '2.4rem',marginTop: '0.5em', marginBottom: '1em'}} type="text" />
            </label>
            
            <button style={{width: '100%', height: '2.4rem', border: 'none'}}>Submit</button>
        </form>
    </section>
 </div>   

)}

export default RecipeForm;
