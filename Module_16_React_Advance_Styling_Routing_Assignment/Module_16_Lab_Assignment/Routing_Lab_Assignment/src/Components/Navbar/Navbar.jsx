import React from 'react'
import { Link } from 'react-router';
import styled from 'styled-components'

const Navbar = () => {

    
    const NavbarContainer = styled.nav `

        background-color: #333;
        padding: 18px;
        display: flex;
        justify-content: center;
        gap: 20px;
        width: 189%;
    
    `

    const StyledLink = styled(Link)`
        color: white;
        text-decoration: none;
        font-size: 18px;

        &:hover {
            color: lightblue;
        }
    `;


    return (

        <NavbarContainer>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/about">About</StyledLink>
            <StyledLink to="/contact">Contact</StyledLink>
        </NavbarContainer>

    )
}

export default Navbar