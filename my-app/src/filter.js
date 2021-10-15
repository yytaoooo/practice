import React from 'react'
  
class Filter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input_value: '21',
            checkbox_value: true
        }
    }

    handleCheckboxChange(v) {
        this.setState({
            checkbox_value: v
        })
    }

    handleInputChange(v) {
        this.setState({
            input_value: v
        })
    }

    render() {
        return (
            <SearchBar input_value={this.state.input_value} checkbox_value={this.state.checkbox_value} inputChange={this.handleInputChange.bind(this)} checkboxChange={this.handleCheckboxChange.bind(this)} />
        )
    }
}
 
class SearchBar extends React.Component {
    constructor(props) {
        super(props)
    }

    handleInputChange(e) {
        this.props.inputChange(e.target.value)
    }

    handleCheckboxChange(e) {
        this.props.checkboxChange(e.target.checked)
    }

    render() {
        return (
            <div>
                text:<input value={this.props.input_value} onChange={this.handleInputChange.bind(this)} />
                <label>
                filter:<input checked={this.props.checkbox_value} type='checkbox' onChange={this.handleCheckboxChange.bind(this)} />    
                </label>
            </div>
        )
    }
}
  

export default Filter

  
  