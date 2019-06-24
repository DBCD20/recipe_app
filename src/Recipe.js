import React, { Component } from 'react';


class Recipe extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
      }
    render(){
        const { title, imgUrl, ingredients, instructions } = this.props.viewRecipe;
        const items = (ingredients ? ingredients.map( i => <li style={{ padding: '0.2em 0' }}>{i}</li>) : '')
        
        
        return(
            <div style={{
                position: 'fixed',
                width: '100%',
                height: '100vh',
                overflow: 'auto',
                top: '0',
                left: '0%',
            }}>
                <article style={{
                justifyContent: 'center',
                alignItems: 'center',
                background: 'rgba(255,255,255, 0.97)',
                top: '0'
            }}>
                <h1 style={{lineHeight: '2.4em', padding: '0 0.5em'}}>{ title }</h1>
                <img style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover'
                }}
                src={ imgUrl }
                alt={ title }
                />
                <section style={{ padding: '1.5em'}}>
                    <h3 style={{ marginBottom: '1em' }}>Ingredients</h3>
                    <ul style={{paddingLeft: '4em', fontWeight: '100', fontFamily: 'sans-serif'}}>
                        {items}
                    </ul>
                </section>
                <section style={{ padding: '1.5em'}}>
                <h3 style={{ marginBottom: '1em' }}>Instructions</h3>
                <p style={{ fontWeight: '100', fontFamily: 'sans-serif'}}>
                    { instructions }
                </p>
                </section>
                <p style={{ textAlign: 'right', padding: '2em', color: 'gray', cursor: 'pointer'}}>
                    <span onClick={ this.props.closeRecipe }>Back</span>
                </p>
            </article>
            </div>
            
        )
    }
}

export default Recipe;