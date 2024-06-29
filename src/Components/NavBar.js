import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';

const NavBar = ({ isLoggedIn }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Backdrop className={isOpen ? 'open' : ''} onClick={toggleNav} />
            <MainContainer>
                <Logo>
                    <img src='/Logo.png' alt='logo GreenEarns' />
                </Logo>
                <Hamburger onClick={toggleNav}>
                    <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                </Hamburger>
                <NavLinks className={isOpen ? 'open' : ''}>
                    <li><StyledLink to='/'>Accueil</StyledLink></li>
                    <li><StyledLink to='/technologies'>Technologies</StyledLink></li>
                    <li><StyledLink to='/map'>Maps</StyledLink></li>
                    <li>
                        {isLoggedIn ? (
                            <CompteButton to='/compte'>
                                <FontAwesomeIcon icon={faUser} /> Compte
                            </CompteButton>
                        ) : (
                            <LoginButton to='/login'>
                                <FontAwesomeIcon icon={faUser} /> Se connecter/ S'inscrire
                            </LoginButton>
                        )}
                    </li>
                </NavLinks>
            </MainContainer>
        </>
    );
};

export default NavBar;

const Backdrop = styled.div`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 998;

    &.open {
        display: block;
    }
`;

const MainContainer = styled.div`
    background-color: #90c138;
    height: 80px;   
    display: flex;  
    align-items: center;  
    justify-content: space-between; 
    padding: 0 20px;
    position: relative;
    z-index: 999;  
    @media (max-width: 768px) {
        justify-content: space-between;
    }
`;

const Logo = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (max-width: 768px) {
        padding-right: 300px; 
    }
`;

const NavLinks = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    align-items: center;

    & > li {
        margin: 0 15px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        position: absolute;
        top: 80px;
        left: 0;
        background-color: #49c01a;
        display: ${props => (props.className === 'open' ? 'flex' : 'none')};

        & > li {
            margin: 15px 0;
        }
    }
`;

const StyledLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    padding-bottom: 5px;
    border-bottom: 2px solid transparent;

    &:hover {
        color: #005700;
        border-bottom: 2px solid #005700;
    }
`;

const CompteButton = styled(Link)`
    display: flex;
    align-items: center;
    background: linear-gradient(45deg, #6abf4b, #90c138);
    color: white;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    padding: 10px 15px;
    border-radius: 5px;

    svg {
        margin-right: 5px;
    }

    &:hover {
        background: linear-gradient(45deg, #90c138, #6abf4b);
        color: white;
    }
`;

const LoginButton = styled(Link)`
    display: flex;
    align-items: center;
    background: linear-gradient(45deg, #90c138, #6abf4b);
    color: white;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    padding: 10px 15px;
    border-radius: 5px;

    svg {
        margin-right: 5px;
    }

    &:hover {
        background: linear-gradient(45deg, #6abf4b, #90c138);
        color: white;
    }
`;

const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    margin-right: 20px;
    font-size: 24px;

    @media (max-width: 768px) {
        display: flex;
        position: absolute;
        right: 20px;
    }

    svg {
        color: white;
    }
`;
