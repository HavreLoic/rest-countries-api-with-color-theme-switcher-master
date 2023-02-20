import React from 'react'
import Data from '../../data.json'
import { Cards } from '../index'
import './card.styles.css'

// look at the gap and width set by css in chrome's console

const Card = () => {
    return (
        <>
            <div className='px-5 px-lg-0 container'>
                <div className='row'>
                    {Data.map(d => (
                        <div key={d.nativeName} className="shadow mb-5 mb-lg-0 bg-body rounded pb-4 text-start col-lg-3 col-md-4 custom-width">
                            <div className='mb-4'>
                                <img className='w-100 flag-height' src={d.flag} alt={d.name} />
                            </div>
                            <h3 className='mb-4 ps-lg-2 ps-4'>{d.name}</h3>
                            <div className='ps-lg-2 ps-4'>
                                <p><strong>Population:</strong> {d.population}</p>
                                <p><strong>Region:</strong> {d.region}</p>
                                <p><strong>Capital:</strong> {d.capital}</p>
                            </div>
                        </div>
                    ))}</div>
            </div>
        </>
    )
}

export default Card