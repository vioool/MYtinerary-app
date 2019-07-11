import React, { Component } from 'react';
import { getCities, createCity } from '../../store/actions/cityActions';
import { setError } from '../../store/actions/errorActions';
import { ErrorMsg } from '../common/ErrorMsg';
import { CityCreatorCard } from './CityCreatorCard';
//connect our component to our redux store
import { connect } from 'react-redux'


class CityCreator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            country: '',
            img: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        this.props.getCities()
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault()
        const formData = {
            name: this.state.name,
            country: this.state.country,
            img: this.state.img
        }
        this.props.createCity(formData)
    }

    render() {
        const { cities } = this.props
        const { errors } = this.props
        return (
            <div id="index">
                {console.log(this.props)}
                {console.log(this.props.cities)}
                {/* {console.log('hello',this.props.error)} */}
                <div className="errorMsg center red-text text-accent-3">
                    <ErrorMsg errors={errors} />
                </div>
                <form onSubmit={this.onSubmit}>
                    <label>City Name</label>
                    <input
                        type='text'
                        name='name'
                        value={this.state.name}
                        onChange={this.onChange}
                    />
                    <label>Country Code</label>
                    <input
                        type='text'
                        name='country'
                        value={this.state.country}
                        onChange={this.onChange}
                    />
                    <label>Image</label>
                    <input
                        type='text'
                        name='img'
                        value={this.state.img}
                        onChange={this.onChange}
                    />
                    <button className="btn waves-effect waves-light red accent-3" type="submit" name="action">Submit
                        <i className="material-icons right">send</i>
                    </button>
                </form>

                <div>
                    {cities.map(({name, img, _id }) => { 
                        return <CityCreatorCard key={_id} name={name} _id={_id} img={img}
                    /> })}
                </div>

            </div>
        )
        // let cityList
        // const { cities } = this.props
        // if (cities) {
        //     cityList = cities.map(city => {
        //         return (
        //             <div className="card-panel" key={city._id}>
        //                 <p>{city.name}</p>
        //             </div>
        //         )
        //     })
        //     return (
        //         <div className="container">
        //             {cityList}
        //         </div>
        //     )
        // } else {
        //     cityList = <p>Loading...</p>
        // }
    }
}
//therse are the reducers (combined in your rooteReducer/Index)
const mapStateToProps = state => ({
    cities: state.cities.cities,
    errors: state.error
})

export default connect(mapStateToProps, { getCities, createCity, setError })(CityCreator)