import React from 'react';
import styled from 'styled-components';
const Input = ({ type , placeholder }) => {
    return (
        <Container>
            <StyledInput placeholder={placeholder && placeholder} type={type ? type : "text"}
            />
           
        </Container>
    );
};
const StyledInput = styled.input`
    /* width:100%; */
    width:400px;
    min-width:250px;
    height:50px;
    border:none;
    margin:1rem 0;
    /* height:40px; */
    border:none;
    /* margin:0.5rem 0; */
    background-color: #f0f0f0;
    border-radius:5px;
    padding: 0 1rem;
    
`;
const Container = styled.div`
    margin-bottom:1rem;
    /* display:flex; */
    /* justify-content:left;
    align-items:center; */
    
`;
export default Input
