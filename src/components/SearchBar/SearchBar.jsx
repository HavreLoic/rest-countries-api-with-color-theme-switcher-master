import React from 'react'


const SearchBar = () => {
    return (
        <>
            <nav className="navbar bg-body-tertiary mb-3 px-3">
                <div className="container-fluid">
                    <form className="d-flex mx-auto p-3 w-75" role="search">
                        <div className='input-group'>
                            <input className="form-control me-2 p-3" type="search" placeholder={`Search for a country...`} aria-label="Search" />
                        </div>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default SearchBar