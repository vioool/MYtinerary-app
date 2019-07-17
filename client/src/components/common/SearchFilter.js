import React, { Component } from 'react'

class SearchFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ''
        }
    }

    updateSearch(event) {
        //target is the input of the searchbar and the value is set in the searchbar as well
        this.setState({
            search: event.target.value
        })
    }

    render() {
        return (
            <div>
            <label>Search City</label>
                <input className='searchbar'
                    type='text'
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)}
                />
            </div>
        )
    }
}

export default SearchFilter