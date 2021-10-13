import React from "react"

const user = {name:'john doe'}
const element = getGreeting(user)

function formatName(user) {
    return user.name
}

function getGreeting(user) {
    if(user) {
        return <h1>hello,{formatName(user)}</h1>
    }
    return <h1>hello,stranger</h1>
}

function Welcome(props) {
    return <div>
        <WelClass name='mike' />
        <WelClass name='viki' />
    </div>
}
class WelClass extends React.Component {
    render() {
        return <h1>hello,{this.props.name}</h1>
    }
}
function Hello() {
    return (
        <Welcome/>
    )
}

export default Hello