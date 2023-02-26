import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import { countryRegion } from '../../GlobalVariable/GlobalVariable';


const DropDownBtn = () => {

    return (
        <Dropdown className='col'>
            <DropdownButton title="Filter by Region">
                {countryRegion.map(country => (
                    <DropdownItem key={country.id}>{country.name}</DropdownItem>
                ))}
            </DropdownButton>
        </Dropdown>
    )
}

export default DropDownBtn