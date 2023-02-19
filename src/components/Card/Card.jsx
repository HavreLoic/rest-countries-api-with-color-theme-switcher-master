import React from 'react'
import Data from '../../data.json'

const Card = () => {
    const allData = Data.map(d => (
        <div key={d.nativeName}>
            <p>{d.name}</p>
        </div>
    ))
    return (
        <div>{allData}</div>
    )
}

export default Card