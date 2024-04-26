/* In this file, we are going to take a look at one of the React hook which is useState() which allows us to make a stateful variable along with a setter which we can use to change the value of that stateful variable. Without that setter variable we cannot change the value of the stateful variable. We will be making a counter using useState() to demonstrate. */

import React, {useState} from 'react';
import './useState.css';

function MyComponent(){
    let [count, setCount] = useState(0);
    const Decrement = () =>{
        setCount(count => count-1);
    }
    const Increment = () =>{
        setCount(count => count+1);
    }
    const Reset = () =>{
        setCount(0);
    }

    return(
        <div class="CounterDiv">
            <div class="main">
                <p>{count}</p>
                <div class="CounterDiv-buttons">
                    <button onClick={Decrement}>Decrement</button>
                    <button onClick={Reset}>Reset</button>
                    <button onClick={Increment}>Increment</button>
                </div>
            </div>
        </div>    
    );
}

export default MyComponent;