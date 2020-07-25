
import React from 'react';

export const GifItem = ( {  title, url } ) => {

    const url2 = url.url;

    return (
        <div className="card animate__animated animate__fadeInDown" >
            <img src={url2} alt={ title } />
            <p>{ title } </p>
        </div>
    )
}