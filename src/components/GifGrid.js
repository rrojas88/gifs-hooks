
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem';

export default function GifGrid( { category } ) {

    //LLamado al CUSTOM HOOK
    const { data, loading } = useFetchGifs( category );

    return (
        <>
            <h3> { category } </h3>

            { loading && <p>Cargando...</p> }

            <div className="card-grid">
                {
                    data.map( img => (
                        <GifItem 
                            { ...img } 
                            key={ img.id }
                            />
                    ))
                }
            </div>
        </>
    )
}
