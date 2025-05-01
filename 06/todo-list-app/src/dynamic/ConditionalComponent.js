import React from 'react';
import Hello from './Hello';
import Greeting from './Greeting';

function ConditionalComponent({ isLoggedIn }) 
{
    // if (isLoggedIn) {
    //     return <Hello/>;
    // }    
    // return <Greeting name="JJangA" />;
    return isLoggedIn ? <Hello /> : <Greeting name="뿡" />
}

export default ConditionalComponent;