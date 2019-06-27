import React from 'react'

// UI/funcion component- no classes and states but funcions - no render methodes
const Beasts = ({ beasts }) => {
    // option 1 for conditional Output- if statement
    // hierboven de props parameter geeft direct toegang tot de beasts array in de Parent Component
    // const beastList = beasts.map(beast => {
    //     if (beast.age > 50) {
    //         return (
    //             <div className="beast" key={beast.id}>
    //                 <div>Name: {beast.name}</div>
    //                 <div>Age: {beast.age}</div>
    //                 <div>Belt: {beast.belt}</div>
    //             </div>
    //         )
    //     } else {
    //         return null
    //     }
    // })

    // option 2 for conditional Output- ternary operator
    const beastList = beasts.map(beast => {
        return beast.age > 50 ? (
            <div className="beast" key={beast.id}>
                <div>Name: {beast.name}</div>
                <div>Age: {beast.age}</div>
                <div>Belt: {beast.belt}</div>
            </div>
        ) : null
        // condition ? (what if cond is true) : (what if cond is false)
    });
    return (
        <div className="beast-list">
            {beastList}
            {/* option 3 for conditional Output- ternary operator placed directly inside the curly brackets
            above and delete the const = and the ; (not best option-better to saparate the logic from the templete) */}
        </div>
    )
}

export default Beasts