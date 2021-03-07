import React from "react";
import styled from "styled-components";
import AddPlayerDialog from "components/players/AddPlayerDialog";
  
const HomePage = () => {

  return <Root><AddPlayerDialog/></Root>;
};

const Root = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`;

export default HomePage;
