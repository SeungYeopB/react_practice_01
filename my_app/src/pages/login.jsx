import React from "react";
import styled from "styled-components"

class Login extends React.Component {

    state= {
        id : "",
        password : ""
        
    };

    handleInput = (e) =>{
        const {name, value} = e.target;
        if (name === "id") 
            this.setState({id : value});
        if (name === "password") 
            this.setState({password : value});
        };
    handleSubmit = () => {
        const {id, password} = this.state;
        if(id === "study0610" && password === "password") {
            window.location.href = "/home";
        }
    };


    render() {
        return (
            <Container>
                <LoginBox>
                    <Title>로그인</Title>
                    <InputContainer>
                        <Input 
                            type="text" 
                            placeholder="ID" 
                            value={this.state.id}
                            onChange={this.handleInput}
                            name="id"/>
                        <Input 
                            type="password" 
                            placeholder="PASSWORD" 
                            value={this.state.password}
                            name="password"
                            onChange={this.handleInput}/>
                        <Checkcontainer>
                            <Checkbox type="checkbox" />
                            <h2>로그인 상태 유지</h2>
                        </Checkcontainer>
                    </InputContainer>
                    <Button onClick={this.handleSubmit}>Login</Button>
                </LoginBox>
            </Container>
        )
    }
}
export default Login; 

const Container = styled.section`
    width: 100vw;
    height: 100vh;

    
    display: flex;
    align-items: center;
    justify-content: center;
`;

const LoginBox = styled.div`
    width: 30%;
    height: 70%;

    border: 2px solid red;
    padding: 4em 3em;
    
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;


`;

const Title = styled.h2`
    text-align: center;
    font-family: 'Black Han Sans', sans-serif;
    font-size: 3rem;
    
    
`; 

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    height: 1.5em;
    
    font-size: 2rem;

    transition: all 0.2s;
    
    background-color: rgba(0,0,0,0.1);
    margin-bottom: 0.5em;
    padding-left: 0.3em;
    
    border: none;
    
    :focus {
        background-color: transparent;
        border: 2px solid black;
    }
    :hover {
        background-color: rgba(0,0,0,0.15);
        
    }
    `;

const Checkcontainer = styled.div`
    display: flex;
    align-items: center;
    
`;

const Checkbox = styled.input`
    
    width: 2em;
    height: 2em;

    margin-right: 0.7em;
    :focus {
        background-color: transparent;
        border: 2px solid black;
    }
    :hover {
        background-color: rgba(0,0,0,0.15);
        
    }
`;

const Button = styled.button`
    width: 5em;
    height: 5em;

    border-radius: 1em;
    
`;