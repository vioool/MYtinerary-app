import React, { Component } from 'react';
import { getItineraries, createItinerary } from '../../store/actions/itineraryActions'
import { setError } from '../../store/actions/errorActions';
import { ErrorMsg } from '../common/ErrorMsg';
import ItineraryCreatorCard from './ItineraryCreatorCard';
//connect our component to our redux store
import { connect } from 'react-redux'

class CreateItinerary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            city: '',
            img: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        this.props.getItineraries()
    }

    //computed property names: computes name of property based on its value!
    onChange(e) {
                this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault()
        const formData = {
            title: this.state.title,
            city: this.state.city,
            img: this.state.img
        }
        this.props.createItinerary(formData)
        this.setState({
            title: "",
            city: "",
            img: ""
          });
    }

    render() {
        const { itineraries } = this.props
        const { errors } = this.props
        return (
            <div id="index">
                {console.log(this.props)}
                {console.log(this.props.itineraries)}
                {/* {console.log('hello',this.props.error)} */}
                <div className="errorMsg center red-text text-accent-3">
                    <ErrorMsg errors={errors} />
                </div>
                <form onSubmit={this.onSubmit}>
                    <label>Title</label>
                    <input
                        type='text'
                        name='title'
                        value={this.state.title}
                        onChange={this.onChange}
                    />
                    <label>City</label>
                    <input
                        type='text'
                        name='city'
                        value={this.state.city}
                        onChange={this.onChange}
                    />
                    <label>Image</label>
                    <input
                        type='text'
                        name='img'
                        value={this.state.img}
                        onChange={this.onChange}
                    />
                    <button className="btn waves-effect waves-light red accent-3" type="submit" title="action">Submit
                    <i className="material-icons right">send</i>
                    </button>
                </form>
                <div>
                    {itineraries.map(({ title, img, _id }) => {
                        return <ItineraryCreatorCard key={_id} title={title} _id={_id} img={img}
                        /> })}
                </div>
            </div>
        )
    }
}
//these are the reducers (combined in your rooteReducer/Index)
const mapStateToProps = state => ({
    itineraries: state.itineraries.itineraries,
    errors: state.error
})

export default connect(mapStateToProps, { getItineraries, createItinerary, setError })(CreateItinerary)