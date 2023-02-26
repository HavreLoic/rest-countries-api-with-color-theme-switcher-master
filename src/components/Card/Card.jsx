import React from 'react'
import Data from '../../data.json'
import './card.styles.css'

const Card = () => {

    return (
        <>
            <div className='px-5 px-lg-0 container'>
                <div className='row'>
                    {Data.map(d => {
                        const { nativeName, flag, name, population, region, capital } = d;
                        return (
                            <div key={nativeName} className="shadow mb-5 mb-lg-0 bg-body rounded pb-4 text-start col-lg-3 col-md-4 custom-width">
                                <div className='mb-4'>
                                    <img className='w-100 flag-height' src={flag} alt={name} />
                                </div>
                                <h3 className='mb-4 ps-lg-2 ps-4'>{name}</h3>
                                <div className='ps-lg-2 ps-4'>
                                    <p><strong>Population:</strong> {population}</p>
                                    <p><strong>Region:</strong> {region}</p>
                                    <p><strong>Capital:</strong> {capital}</p>
                                </div>
                            </div>
                        )

                    })}</div>
            </div>
        </>
    )
}

export default Card