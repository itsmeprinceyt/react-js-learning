import React, {useState,createContext} from 'react';
import ComponentB from './ComponentB.jsx';
export const UserContext = createContext();
function mainContext(){
    const [user,setUser] = useState("Sam");

    return(
        <UserContext.Provider value={user}>
            <p>Hello, I am from Main Component and my name is {user}</p>
            <ComponentB/>
        </UserContext.Provider>
    )
}

export default mainContext;