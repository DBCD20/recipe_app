import React from 'react';


    const RecipeCard = props => {
        const { imgUrl, title } = props;
        return (
            <div style={{
                flex: '0 0 auto',
                margin: '10px',
                boxShadow: '0 0 15px lightgrey',
                cursor: 'pointer'
                }} onClick={ (e) => props.getRecipe(e.currentTarget.querySelector('img').alt) }>
                <img 
                    style={{
                        width:'400px',
                        maxWidth: '100%'
                    }}
                    src={ imgUrl } alt={ title }
                />
                <h2 style={{
                    fontSize: '0.9rem',
                    fontFamily: 'sans-serif',
                    letterSpacing: '0.07em',
                    padding: '0.5em',
                }}>
                    { title }
                </h2>
            </div>

        )
}

export default RecipeCard;