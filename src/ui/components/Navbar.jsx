import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', {
            replace: true
        });
    }

    return (
        <div className='nav justify-content-center nav-top'>
        <nav className="navbar navbar-expand-sm navbar-expand-lg navbar-light">
            <div className="navbar-collapse">
                <div className="navbar-nav">
                    
                    <NavLink 
                        className={ ({isActive}) => `${ isActive ? ' navbar-align-left nav-item nav-link active':' navbar-align-right nav-item nav-link' }` }
                        to="/all"
                    >
                        All
                        
                        
                    </NavLink>
                    
                    
                    <NavLink 
                        className={ ({isActive}) => `  ${ isActive ? 'navbar-align-left nav-item nav-link active':'navbar-align-right nav-item nav-link active' }` }
                        to="/favorites"
                    >
                        My faves
                    </NavLink>                    
                    
                </div>
            </div>            
        </nav>
        </div>
    )
}
