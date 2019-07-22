import React, { Component } from "react"
import { getItineraries } from '../../store/actions/itineraryActions'
import ItineraryCard from './ItineraryCard'
import { connect } from 'react-redux'

class Itineraries extends Component {

    componentDidMount() {
        const city = window.location.pathname.split("/")[2];
        this.props.getItineraries(city)
    }

    render() {
        console.log(this.props);
        const { itineraries } = this.props
        return (
            <div id="index">
                {itineraries.map(({ title, img }, index) => {
                    return <ItineraryCard
                        name={title}
                        img={img}
                        key={index} />
                })}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    itineraries: state.itineraries.itineraries
})
export default connect(mapStateToProps, { getItineraries })(Itineraries) 