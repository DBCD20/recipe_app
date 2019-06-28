import React from 'react';

const Navbar = props => (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '0.7em' }}>
        <h1 style={{ color: 'gray' }}>YUM</h1>
        <span style={{
            lineHeight: '2em', 
            color: 'gray', 
            fontFamily: 'sans-serif', 
            cursor: 'pointer' }}
        onClick={ props.toggle }
        >Add Recipe</span>
    </nav>
)

export default Navbar;