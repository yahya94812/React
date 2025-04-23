import PropTypes from "prop-types"
function UserGreeting(props){
    // if(props.isLoggedIn){
    //     return (
    //         <h1>Welcome {props.username}</h1>
    //     )
    // }
    // else{
    //     return (
    //         <h1>{props.username} please login to continue</h1>
    //     )
    // }

    const welcomeMessage = <h1 className="welcome-message">Welcome {props.username}</h1>

    const loginPrompt = <h1 className="login-prompt">{props.username} please login to continue</h1>

    return (props.isLoggedIn ? welcomeMessage :
         loginPrompt)
}


//still not working
UserGreeting.propTypes = {
    isLoggedIn : PropTypes.bool,
    username : PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn : false,
    username : "Guest",
}

export default UserGreeting; 