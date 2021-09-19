import React from "react";
import styled from "styled-components"

class Home extends React.Component{
    render() {
        return <Container>hello homepage</Container>
    }
}

export default Home;

const Container = styled.section`
    background-color: red;

    width: 100vw;
    height: 100vh;
`;
