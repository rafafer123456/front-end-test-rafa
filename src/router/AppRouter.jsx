import { Route, Routes } from 'react-router-dom';

import { SimpleRoutes } from '../heroes';
/*import { LoginPage } from '../auth';*/



export const AppRouter = () => {
  return (
    <>

        <Routes>                                                
            <Route path="/*" element={ <SimpleRoutes />} />                        
        </Routes>
    
    </>
  )
}
