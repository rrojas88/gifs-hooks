import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import GifGrid from './components/GifGrid';



export const GifApp = () => {

    const categories_ = ['Digimon' ];
    const [categories, setCategories] = useState( categories_);
/*
    const handleAdd = () => {
        //setCategories( [ ...categories, 'x-men' ] )
        setCategories( cats => [ ...cats, 'X-men' ] )
    }*/

    return (
        <>
            <h2> Gif App </h2>
            <AddCategory setCategories={ setCategories } />
            <hr />
            {/*}
            <button type="button" onClick={ handleAdd } >
                + Agregar
            </button>
            */}
            <ol>
                { 
                    categories.map( c => (
                        <GifGrid 
                            category={ c } 
                            key={ c }
                        />
                    ))
                }
            </ol>
        </>
    )

}

export default GifApp;

