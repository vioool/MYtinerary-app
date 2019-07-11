import React from 'react';
//1. we connect our component to the store
// import { connect } from 'react-redux'


const readCityId = (id) => {
    fetch("/cities/"+id, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(r => r.json()).then(data => console.log(data))
}

export const CityCreatorCard = ({_id, name, img}) => {   
    // render() {
        // let cityList;
        // const { cities } = this.props;
        // if (cities) {
        //     cityList = cities.map(city => {
                return (
                    <div 
                        key={_id}
                        onClick={() =>readCityId(_id)}
                    >
                    <img
            src={img}
            alt='city image'/>
                        <p>{name}</p>
                    </div> 
                )
        //     })
        // }
    // }

}

   


// const mapStateToProps = state => ({ 
//     cities: state.cities.cities,
//   }) 
// export default connect(mapStateToProps)(CityCreatorCard) 