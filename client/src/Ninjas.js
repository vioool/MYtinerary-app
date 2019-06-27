import React, { Component } from 'react';

// container component
class Ninjas extends Component { //maak class aan
    render() { //render to the DOM
        const { ninjas } = this.props; // new var {stored the ninjas array of Parent} = properties van de ninjas van de global data/state
        const ninjaList = ninjas.map(ninja => { //we want to output it to the DOM and cycle through those ninjas and output HTML for 
            // every induvidual one by mapping array into new array ninjaList with HTML elements for every ninja and output it into the template
            // hierboven dus new array = oude ninjas array.map it into a new array(loop through all indivual ninjas and perform a function on every ninja => is )
            //in other words: cycling through ninjas array, mapping into new array and for each ninja inside this array we return a bit of template for that ninja
            return (
                <div className="ninja" key={ninja.id}>
                    {/* the key-id above you need to identify every unique ninja so 
                    when you delete one from the state React knows which one to delete from the DOM! */}
                    <div>Name: {ninja.name}</div>
                    <div>Age: {ninja.age}</div>
                    <div>Belt: {ninja.belt}</div>
                    {/* ninja is the name in the function .map(ninja) we reference to because 
                    we cycle through that item each time around */}
                    {/* and we store these into that new array now ninjaList 
                    and now we only have to output that array down below at the return of the component Ninjas */}
                </div>
            )
        })
        return (
            <div className="ninja-list">
                { ninjaList }
                {/* above: output the new array ninjaList with the list of all the ninjas 
                and there props and values(React knows and does it for you by this one simple reverence)  */}
            </div>
        )
    }
}

export default Ninjas