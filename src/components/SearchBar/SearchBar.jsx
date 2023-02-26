import React from 'react'
import { DropDownBtn } from '../index'

const SearchBar = () => {
    return (
        <>
            <nav className="navbar bg-body-tertiary mb-3 px-3">
                <div className="container">
                    <form className="mx-auto p-3 w-100" role="search">
                        <div className='row row-cols-2'>
                            <div className='input-group col mb-3 mb-sm-2 mb-md-2'>
                                <input className="form-control me-2 p-3" type="search" placeholder={`Search for a country...`} aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </div>

                            <div className='col'>
                                <DropDownBtn />
                            </div>
                        </div>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default SearchBar