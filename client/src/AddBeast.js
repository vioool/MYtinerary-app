import React, { Component } from 'react'

class AddBeast extends Component {
    state = {
        name: null,
        age: null,
        belt: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value 
            // [looks for the property in the state with the id]: [ e is the event, target is the inputfield, value where you want to update it with is the text value of the inputfield the user is filling]
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {/* for the submit event we make a new function */}
                    {/* we add a submit event to the whole form! so the enter key also submits the form :) */}
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange} /> 
                    {/* hierboven: between brackets we call this function handleChange */}
                    <label htmlFor="age">Age:</label>
                    <input type="text" id="age" onChange={this.handleChange} />
                    <label htmlFor="belt">Belt:</label>
                    <input type="text" id="belt" onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddBeast