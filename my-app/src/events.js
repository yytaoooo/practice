import React from 'react'

class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0
        }

    }

    handleClick(step,e) {
        console.log('del', step);
        console.log(e);
        this.setState(state =>  ({
            id: state.id + step
        }))
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick.bind(this, 1)}>
                    add
            </button>
                <h1>
                    {this.state.id}
                </h1>
            </div>
        )
    }
}

export default Button