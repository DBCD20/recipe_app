import React from 'react';
import Searchbar from './Searchbar';


const Header = props => (
    <header style={{
        background: 'linear-gradient(150deg, rgba(255,255,255,0.7), rgba(255,255,255,0.7)),url(https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&h=650&w=940) no-repeat center',
        width: '100%',
        height: '300px',
        backgroundSize: 'cover',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '2em',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <div style={{flex: '0 0 80%'}}>
        <h1 style={{
            textAlign: 'center',
            fontFamily: 'sans-serif',
            fontWeight: '990',
            fontSize: '5em',
            color: '#49044d',
            textShadow: '0  0 50px white'
        }}>
            Recipe
        </h1>
        <Searchbar search={ props.search } searchItem={ props.searchItem } />
        </div>
        
    </header>
)

export default Header;