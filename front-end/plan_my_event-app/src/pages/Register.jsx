import styled from "styled-components"
import Navbar from "../components/NavBar";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0;
`

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px;
  background-color: teal;
  color: white;
  cursor: pointer;
`

const RegisterForm = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                <Form>
                    <Input placeholder="First Name"/>
                    <Input placeholder="Last Name"/>
                    <Input placeholder="Username"/>
                    <Input placeholder="Email"/>
                    <Input placeholder="Password"/>
                    <Input placeholder="Confirm Password"/>
                    <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <b>PRIVACY POLICY</b>
                    </Agreement>
                    <Button>CREATE</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

const Register = () => {
    return (
        <div>
            <Navbar/>
            <RegisterForm/>
        </div>
    )
}

export default Register