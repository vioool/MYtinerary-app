import React, { Component } from "react"
import { getCities } from '../store/actions/cityActions'
import {CityCard} from './cities/CityCard'
import { connect } from 'react-redux'

class Cities extends Component {

    componentDidMount() {
        this.props.getCities()
    }

    render() {
        console.log(this.props);
        const { cities } = this.props
        console.log(this.props.cities);
        if (cities.length > 0) {
            return (
                <div className="container">
                   {cities.map(city => {
                        return (
                            <CityCard 
                                key={city._id} 
                                name={city.name} 
                                _id={city._id} 
                                img={city.img} 
                            />
                        )
            })}
                </div>
            )
        } else {
           
            return ( 
                <div className="container">
                    <div>
                        <p className="center">Loading...</p>
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({
    cities: state.cities.cities
})
export default connect(mapStateToProps, { getCities, CityCard })(Cities) 