import React from 'react'
import Styled from 'styled-components';

const Home = () => {

    const Container = Styled.div`
        padding =  20px;
        textalign = center;
    `;


    return (
        <Container>
            <h1>Home Page</h1>
            <p>This is the home page of our site</p>
        </Container>
    )
}

export default Home;