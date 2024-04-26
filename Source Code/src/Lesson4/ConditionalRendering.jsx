import UserTest from './UserTest.jsx'

function ConditionalRendering(){
    return(
        <>
            <UserTest isTrue={true}/>
            <UserTest/>
        </>
    );
}

export default ConditionalRendering