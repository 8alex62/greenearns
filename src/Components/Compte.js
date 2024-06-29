import React from 'react';
import { useNavigate } from 'react-router-dom';

const Compte = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        setIsLoggedIn(false);
        navigate('/');
    };

    return (
        <div>
            <h1>Compte</h1>
            <button onClick={handleLogout}>Déconnexion</button>
        </div>
    );
};

export default Compte;
