import React from 'react'
import Nav from 'react-bootstrap/Nav';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { DarkLightButton } from '../index'
library.add(fas, faMoon)


const NavTop = () => {

    return (
        <Nav variant="pills" defaultActiveKey="/home" className='px-lg-5 px-sm-3 shadow p-3 mb-5 bg-body rounded'>
            <Nav.Item>
                <Nav.Link className='text-dark fw-bolder' eventKey="disabled" disabled>
                    Where in the world?
                </Nav.Link>
            </Nav.Item>

            <Nav.Item className='ms-auto'>
                <Nav.Link className='text-dark' eventKey="disabled" disabled>
                    {/* <FontAwesomeIcon className='me-2' icon="fa-regular fa-moon" /> */}
                    Dark theme
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default NavTop;