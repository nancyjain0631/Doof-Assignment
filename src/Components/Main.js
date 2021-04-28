import React from 'react'
// import TestButton from './TestButton';
import styled from "styled-components";
import Login from "../assets/Login.png";
const Main = () => {
    return (
        
        <Container>
            <TestWrapper>
                <button>Test</button>
            </TestWrapper>
            <TitleWrapper>
                <h4>Unlock your stuck revenue</h4>
                <p>We help you unlock the true potential connect with your customers to understand the rights and wrongs with your product.</p>
                <img src={Login} alt=""/>
            </TitleWrapper>
            
        </Container>
        

    );
};
const TestWrapper = styled.div`
    text-align:right;
    button{
        
        width:180px;
        height:45px;
        font-weight:600;
        font-size:18px;
       
        align-items:center;
        text-align:center;
        color:#333333;
        border-radius:5px;
        background-color:#F7D832;
        border:none;

    }
    
`;
const TitleWrapper = styled.div`
    text-align:right;
    color:#333333;
    h4{
        font-weight:700;
        font-size:22px;
        line-height:44px;
    }
    p{
        font-weight:500;
        font-size:14px;
        line-height:22px;
    }
    img{
        margin-top:1rem;
        max-height:16rem;
        max-width:26rem;
    }
`;
const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:right;
    padding:1rem 4rem;
    max-width:600px;
    height:100%;
    top:260px;
    text-align:right;
    
`;

export default Main;
