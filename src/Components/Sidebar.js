import React from 'react';
import styled from "styled-components";
import Input from "./Input";
const Sidebar = () => {
    return (
       <Container>
           <LogoWrapper>
               <h2>DOOF</h2>
           </LogoWrapper>
           <Form>
           <h3>Login</h3>
                <Label for="email">Email</Label><br/>
                <Input type="email" placeholder="Email"/>
                <Label for="password">Password</Label><br/>
                <Input type="password" placeholder="Password"/>
                <button>Login</button>
           </Form>
           <p>Don’t have an account yet? <span>Signup</span></p>
           <Terms>
               Terms of Service &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Privacy Policy
           </Terms>
        </Container>
    );
};
const Terms = styled.div`
    font-weight:500;
    font-size:15px;
    color:#333333;
`;
const Label = styled.div`
    color:#a5a5a5;
    position:absolute;
    left:140px;
    font-weight:600;
    font-size:14px;
    

`;
const Form = styled.form`
    width:100%;
    
    h3{
        color: #333333;
        margin-bottom:2rem;
        font-size:1.5rem;
        font-weight:bold;
    }
    button{
        /* max-width:100%; */
        width:430px;
        min-width:250px;
        height:50px;
        border:none;
        margin:1rem 0;
        background-color:#F7D832;
        border-radius:5px;
        color:#333333;
        cursor:pointer;
        font-size:18px;
        font-weight:600;
        align-items:center;
        text-align:center;
        
    }
`;
const LogoWrapper = styled.div`
    h2{
        font-weight:700;
        font-size:3rem;
        color: #F7D832;
        /* top:60px; */
    }
`;
const Container = styled.div`
    max-width:600px;
    height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:left;
    
    padding:0 140px;
    
    p{
        font-weight:500;
        font-size:18px;
        color: #333333;
    }
    span{
        font-weight:700;
        font-size:18px;
        color: #333333;
    }
    /* @media (max-width:900px){
        width:100vw;
        position:absolute;
        padding:0;
    } */
`;
export default Sidebar;
