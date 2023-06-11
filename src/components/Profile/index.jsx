import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
import './profile.css'

const Profile = () => {

    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div className="divProfile">
                <img src={user.picture} alt={user.name} />
                <h2>{user.name} </h2>
                <p>{user.email} </p>
                
            </div>
        )
    );
}

export default Profile;