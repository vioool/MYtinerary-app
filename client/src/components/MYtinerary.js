import React, { Component } from "react";

import AddTinerary from '../AddTinerary';

class MYtinerary extends Component {
    render() { //Virtual DOM
        return (
            <div className="MYtinerary">
                <AddTinerary />
            </div>
        );
    }
}

export default MYtinerary;