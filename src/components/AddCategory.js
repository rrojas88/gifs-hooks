
import React, { useState } from 'react';

import PropTypes from 'prop-types'

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('')

    const handleSubmit = ( e ) => {
        e.preventDefault();

        if( inputValue.trim().length > 2 ){
            setCategories( cats => [ inputValue, ...cats ] )
            setInputValue('')
        }
        
    }
    const handleInputChange = ( e ) => {
        setInputValue( e.target.value )
    }

    return (
        <form onSubmit={ handleSubmit }>
            <h2>Add CAtegory: { inputValue }</h2>

            <input 
                type="text" 
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

