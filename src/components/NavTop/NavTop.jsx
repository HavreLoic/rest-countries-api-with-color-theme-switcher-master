import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-regular-svg-icons';
library.add(fas, faMoon)

const NavTop = () => {
    return (
        <Nav variant="pills" defaultActiveKey="/home" className='px-lg-5 px-sm-3 shadow p-3 mb-5 bg-body rounded'>
            <Dropdown>
                <DropdownButton title="Where in the world?">
                    <Dropdown.Item href="#/action-2">Africa</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">America</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Asia</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Europe</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Oceania</Dropdown.Item>
                </DropdownButton>
            </Dropdown>

            <Nav.Item className='ms-auto'>
                <Nav.Link className='text-dark' eventKey="disabled" disabled>
                    <FontAwesomeIcon className='me-2' icon="fa-regular fa-moon" />
                    Dark theme
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default NavTop;