import React, { useState } from "react";
import styled from "styled-components";
import Elevation from "components/common/Elevation";
import { spacing, colors } from "styles/variables";
import { useForm } from "antd/lib/form/Form";
import { Form, Input } from "antd";
import { Typography } from 'antd';
import PlayerName from "./name";
import { Content } from "antd/lib/layout/layout";
import Lives from "./stats/lives";
import Points from "./stats/points";
import { PresetColorTypes } from "antd/lib/_util/colors";

const { Title } = Typography;

const PlayerPanel = (props) => {
  let bgColor = colors.white;
  if (props.selected) bgColor = colors.yellow;
  return (
    <Root bgColor = {bgColor}>
      <Content1>
        <PlayerName 
          firstname = {props.firstname}
          lastname = {props.lastname}
        />
      </Content1>
      <Content2>
        <Points points = {100} />
        <Lives />
      </Content2>
    </Root>
  );
};

const Root = styled(Elevation)`
  display: grid;
  grid-template-rows: 35% auto;
  width: 400px;
  background-color: ${props => props.bgColor};
  margin-top: ${spacing.large};
  padding: ${spacing.medium};
`;

const Content1 = styled.div`
  grid-row-start: 1;
`;

const Content2 = styled.div`
  grid-row-start: 2;
  display: flex;
  justify-content: space-evenly;
`;

export default PlayerPanel;
