import React, { useState } from "react";
import styled from "styled-components";
import Elevation from "components/common/Elevation";
import PlayerPanel from "pages/final/player_panel";
import { spacing } from "styles/variables";
import { useForm } from "antd/lib/form/Form";
import { Form, Input } from "antd";
import { Typography } from 'antd';
import Question from "./question";

const { Title } = Typography;

export const firstnameField = "firstname";
export const lastnameField = "lastname";

const Final = (props) => {

  return (
    <Root>
      <Content>
        <Question
          content = "Gdzie znajdziesz mechanizm różnicowy? W silniku, lusterkach elektrycznych, zespole przeniesienia napędu czy skrzyni biegów? "
        />
      </Content>
      <Players>
        <Content2>
          <PlayerPanel 
            firstname = "Ania"
            lastname = "Kowalska"
            selected = {false}
          />
          <PlayerPanel 
            firstname = "Piotr"
            lastname = "Borowski"
            selected = {true}
          />
          <PlayerPanel 
            firstname = "Babcia"
            lastname = "Krysia"
            selected = {false}
          />
        </Content2>
      </Players>
      
    </Root>
  );
};

const Root = styled.div`
  display: grid;
  grid-template-rows: 300px auto;
`;

const Content = styled.div`
  grid-row-start: 1;
`;

const Content2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Players = styled.div`
  display: flex;
  grid-row-start: 2;
  flex-direction: column;
  justify-content: center;
  height: 500px;
`;

export default Final;
