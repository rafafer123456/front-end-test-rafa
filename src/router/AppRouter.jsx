import { Route, Routes } from 'react-router-dom';

import { SimpleRoutes } from '../app';



export const AppRouter = () => {
  return (
    <>

        <Routes>                                                
            <Route path="/*" element={ <SimpleRoutes />} />                        
        </Routes>
    
    </>
  )
}
