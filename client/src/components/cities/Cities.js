import React, { Component } from "react"
import { getCities } from '../../store/actions/cityActions'
import CityCard from './CityCard'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'

class Cities extends Component {
    constructor() {
        super();
        this.state = {
            search: ''
        }
    }

    componentDidMount() {
        this.props.getCities()
    }

    updateSearch(event) {
        //target is the input of the searchbar and the value is set in the searchbar as well
        this.setState({
            search: event.target.value
        })
    }

    render() {
        let filteredCities = this.props.cities.filter(
            (city) => {
                //indexOf is looking for the index with particular caracters toLowerCase looks for all same letters no matter upper or lowercase
                return city.name.toLowerCase().indexOf(
                    this.state.search.toLowerCase()) !== -1;//if you can not find (thats the meening of negative 1) this.state within city.name do not return it,
                //however where you can find it then go ahead and return the city
            }
        )
        // const { cities } = this.props  Looks like we dont need this anymore now we made a new let filteredCities
        return (
            <div id="index">
                {console.log(this.props)}

                <div className="searchbar">
                    <i className="fas fa-search"></i>
                    <input className='form-control'
                        placeholder="Search City"
                        type='text'
                        value={this.state.search}
                        onChange={this.updateSearch.bind(this)}
                    />
                </div>
                
                <ul>
                    {/* change cities.map into the new let filteredCities.map so we pass along the data to another variable */}
                    {filteredCities.map(({ name, img, _id }) => {
                        return (
                            <Link to={`/itineraries/${name}`} key={_id}>
                                <CityCard name={name} img={img} />
                            </Link>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    cities: state.cities.cities
})
export default connect(mapStateToProps, { getCities })(Cities)