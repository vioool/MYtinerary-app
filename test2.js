import React, { Component } from "react"
import { getCities } from '../store/actions/cityActions'
import { CityCard } from './cities/CityCard'
import { connect } from 'react-redux'

class Cities extends Component {

    componentDidMount() {
        this.props.getCities()
    }

    render() {
        console.log(this.props);
        let cityList
        const { cities } = this.props
        if (cities) {
            cityList = cities.map(city => {
                return (
                    <div className="card-panel" key={city._id}>
                        <p>{city.name}</p>
                    </div>
                )
            })
            return (
                <div className="container">
                    {cityList}
                </div>
            )
        } else {
            cityList = <p>Loading...</p>
        }
    }
}

const mapStateToProps = state => ({
    cities: state.cities.cities
})
export default connect(mapStateToProps, { getCities })(Cities) 