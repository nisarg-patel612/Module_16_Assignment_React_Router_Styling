import React from 'react'
import styled from 'styled-components'

const About = () => {

    const Container = styled.div `
        padding : 20px;
        text-align : center;
    
    `

    return (
        <Container>
            <h1>About Us</h1>
            <p>This is the about page of our site</p>
        </Container>
    )
}

export default About