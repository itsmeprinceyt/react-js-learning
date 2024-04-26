import React, {useContext} from 'react';
import {UserContext} from './useContext.jsx';

function ComponentB(){

    const user = useContext(UserContext);

    return(
        <div>
            <p>Hello, I am from Component B and I Am {user}</p>
        </div>
    )
}

export default ComponentB;