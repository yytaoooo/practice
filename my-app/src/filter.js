import React from 'react'
import './filter.css'
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
            <div>
                <SearchBar input_value={this.state.input_value} checkbox_value={this.state.checkbox_value} inputChange={this.handleInputChange.bind(this)} checkboxChange={this.handleCheckboxChange.bind(this)} />
                <FilterTable products={this.props.products} checkbox_value={this.state.checkbox_value} input_value={this.state.input_value} />
            </div>
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

class FilterTable extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let product_title = null
        return (
            this.props.products.map(e => {
                if(this.props.checkbox_value && e.stocked == false) {
                    return null
                }
                if(this.props.input_value) {
                    if(e.name.indexOf(this.props.input_value) == -1) {
                        return null
                    }
                }
                let show = product_title != e.category
                product_title = e.category
                return <TableRow product={e} showTitle={show} />
            })
        )
    }
}

class TableRow extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {
                    this.props.showTitle && <p>{this.props.product.category}</p>
                }
                <p className={!this.props.product.stocked ? 's' : ''}>{this.props.product.name}-{this.props.product.price}-{this.props.product.stocked ? 'true' : 'false'}</p>
            </div>
        )
    }
}


export default Filter


