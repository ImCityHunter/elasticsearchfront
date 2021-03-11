import React from 'react';

import HomePage from './HomePage';

class Whiteboard extends React.Component {
    render(){
        return(
            <div className={'justify-content-center text-center container'}>
                <br/>
                <h1> CFC x Elastic Searching </h1>
                <HomePage />
            </div>
        )
    }
}

export default Whiteboard;