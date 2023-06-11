import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import Logout from '../Logout';
import Profile from '../Profile';
import './login.css';


const Login = () => {

    const { loginWithRedirect, isAuthenticated , isLoading} = useAuth0();

if (isLoading) return <h1>Cargando...</h1>

    return (
        <div className='divBienvenido'>
            <h1 className='h1Bienvenido' >Bienvenido</h1>
            {
                isAuthenticated ?< Logout /> : <button className='botonLog' onClick={() => loginWithRedirect()} >Iniciar sesion</button>
            }
            
            <Profile />
            
        </div>
    );
}


export default Login;