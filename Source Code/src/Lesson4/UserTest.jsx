/*function UserTesting(pros){
    if(pros.isTrue)
    {
        return <h1>It is true</h1>
    }
    return <h1>It is false</h1>
}*/

// you can use ternary or if-else , its upto you
import PropTypes from 'prop-types'
import './UserTest.css'
function UserTesting(pros){
    const TrueStatement = <h1 class="true-Statement">It is true</h1>;
    const FalseStatement = <h1 class="false-Statement">It is false</h1>
    return (pros.isTrue ? TrueStatement : FalseStatement)
}
UserTesting.proptypes ={
    isTrue: PropTypes.bool,
}
UserTesting.defaultPRops = {
    isTrue: false
}
export default UserTesting