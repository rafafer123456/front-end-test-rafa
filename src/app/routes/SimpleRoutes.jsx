import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { FavoritePage, AllPage } from '../pages';
import React from 'react'
import { Pagination } from 'evergreen-ui'

export const SimpleRoutes = () => {
  return (
    <>
    <div className='d-flex justify-content-start hacker-new'>
      <h1>HACKER NEWS</h1>
    </div>
        <Navbar />        

        <div className="container">
          <div className="row">
            <div className='col-sm'>
              <div className="dropdown select-new">
                <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Select your news
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a className="dropdown-item" href="#">Angular</a></li>
                  <li><a className="dropdown-item" href="#">Reactjs</a></li>
                  <li><a className="dropdown-item" href="#">Vuejs</a></li>
                </ul>
              </div>
            </div>
          </div>  
          <br />
          <br />
          <div className='row'>
            <div className='col-sm-12'>
            <Routes>
                <Route path="all" element={<AllPage />} />
                <Route path="favorites" element={<FavoritePage />} />                                            
                <Route path="/" element={<Navigate to="/all" />} />

            </Routes>
            </div>
          </div>
        </div>
        <br />
        <div className="d-flex justify-content-center">
          <div className='pagination' style={{ color: 'white' }}>          
            <Pagination
                totalPages={50}
                page={1}
            >
            </Pagination>
          </div>
        </div>
    </>
  )
}
