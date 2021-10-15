import React from 'react'
class NameForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '456',
            select_value: ['apple']
        }
    }

    handleSubmit(e) {
        console.log(this.state.value);
        e.preventDefault()
    }

    handleChange(e) {
        this.setState(state => ({
            value: e.target.value
        }))
    }

    handleSelChange(e) {
        this.setState(state => ({
            select_value: [e.target.value, 'apple']
        }))
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>
                    名字：
                    <input type='text' value={this.state.value} onChange={this.handleChange.bind(this)} />
                </label>
                <select multiple={true} value={this.state.select_value} onChange={this.handleSelChange.bind(this)}>
                    <option value='apple'>苹果</option>
                    <option value='lemon'>柠檬</option>
                </select>
                <label>
                    年龄：
                    <input type='text' value='12' />
                </label>
                <input type='submit' value='submit' />
            </form>
        )
    }
}

export default NameForm