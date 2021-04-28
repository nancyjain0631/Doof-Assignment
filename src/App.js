import React from 'react';
import styled from "styled-components";
import bgImg from "./assets/Background.png";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";

const App = () => {
  return (
   <Container>
     <Wrapper>
       <Sidebar/>
       <Main>
         
       </Main>
     </Wrapper>
   </Container>
  );
};

const Container = styled.div`
  position:absolute;
  top:0;
  bottom:0;
  right:0;
  left:0;
`;
const Wrapper = styled.div`
  background-image:url(${bgImg});
  background-position:center;
  background-size:cover;
  background-repeat:no-repeat;
  height:100%;
  width:100%;
  display:flex;
`;
export default App;
