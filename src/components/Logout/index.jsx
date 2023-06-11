import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './logout.css'

const Logout = () => {
    const { logout } = useAuth0()

    return (
        <button className="botonLog" onClick={() => logout()} >
            Logout
        </button>
    );
}

export default Logout;