import React, { Component } from 'react';

const Searchbar = props => (
    <div style={{background: 'white', boxShadow: '0 0 30px lightgrey'}}>
        
            <input style={{
                padding: '0.6em 0.3em',
                width: '80%',
                display: 'inline-block',
                border: 'none',

            }} 
            onChange={props.search}
            value={props.searchItem}
            />
            <span style={{
                    padding: '0.3em',
                    textAlign: 'center',
                    color: 'grey',
                    fontFamily: 'sans-serif',
                    width: '20%',
                    display: 'inline-block',
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer'
            }}
            >| Search</span>
        </div>
);

export default Searchbar;