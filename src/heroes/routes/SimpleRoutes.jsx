import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages';

export const SimpleRoutes = () => {
  return (
    <>
    <div className='d-flex justify-content-start hacker-new'>
      <h1>HACKER NEWS</h1>
    </div>
        <Navbar />

        <div className="container">
            <Routes>
                <Route path="all" element={<MarvelPage />} />
                <Route path="favorites" element={<DcPage />} />
                
                <Route path="search" element={<SearchPage />} />
                <Route path="hero/:id" element={<HeroPage />} />
                                

                <Route path="/" element={<Navigate to="/all" />} />

            </Routes>
        </div>
    </>
  )
}
