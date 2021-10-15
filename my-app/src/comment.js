function Comment(props) {
    return (
        <div className='Comment'>
            <UserInfo user={props.author} />
            <div className='Comment-text'>
                {props.text}
            </div>
            <div className='Comment-date'>
                {props.date}
            </div>
        </div>
    )
}

function Avatar(props) {
    return (
        <img className='Avatar'
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    )
}

function UserInfo(props) {
    return (
        <div className='UserInfo'>
            <Avatar user={props.user} />
            <div className='UserInfo-name'>
                {props.user.name}
            </div>
        </div>
    )
}

//纯函数
function sun(a, b) {
    return a + b
}

//非纯函数，更改了入参
function withdraw(account, amount) {
    account.total -= amount
}