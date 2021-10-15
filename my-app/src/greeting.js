function UserGreeting(props) {
    return <h1>welcome back</h1>
}

function GuestGreeting(props) {
    return <h1>sign up</h1>
}

function Greeting(props) {
    const isSignUp = props.isSignUp

    function syntax() {
        console.log(1 < 2 && '123');
    }

    syntax()

    if(isSignUp) {
        return <UserGreeting />
    }
    return <GuestGreeting />
}

export default Greeting