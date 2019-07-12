import React from 'react'

export const ErrorMsg = ({errors}) => {
    console.log(errors)
// when there is no error do nothing(null) & when there is an error...
    if (errors != null && errors.length > 0) {
        console.log('jdj')
// then map through errors and we take an idividual error each time we go through the error array
   return errors.map((err,index) =>{
       console.log(err)
       return (
        //and for every single error we assign a key value
        <p key={index}>
            {err.msg}
        </p>
        )
    })
    }
    return null;    
}

