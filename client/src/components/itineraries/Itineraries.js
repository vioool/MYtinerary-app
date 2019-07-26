import React, { Component } from "react"
import { getItineraries } from '../../store/actions/itineraryActions'
import ItineraryCard from './ItineraryCard'
import { connect } from 'react-redux'

class Itineraries extends Component {

    constructor(props) {
        super(props)
        this.state = {
            city: window.location.pathname.split("/")[2]
        }
    }

    componentDidMount() {
        this.setState({
            city: window.location.pathname.split("/")[2]
        })
        const city = this.state.city;
        this.props.getItineraries(city)
    }

    render() {
        console.log(this.props);
        const { itineraries } = this.props
        return (
            <div id="index">
                <h3>{this.state.city}</h3>
                {itineraries.map(({ title, img, city }, index) => {
                    return (
                        <ItineraryCard
                            name={title}
                            img={img}
                            key={index} />
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    itineraries: state.itineraries.itineraries
})
export default connect(mapStateToProps, { getItineraries })(Itineraries)

