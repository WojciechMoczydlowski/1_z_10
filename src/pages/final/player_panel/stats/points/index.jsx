import React, { useState } from "react";
import styled from "styled-components";
import Elevation from "components/common/Elevation";
import { spacing } from "styles/variables";
import { useForm } from "antd/lib/form/Form";
import { Form, Input } from "antd";
import { Typography } from 'antd';

const { Title } = Typography;

const Points = (props) => {
  return (
    <Root>
      <MyTitle level={1}> {props.points} </MyTitle>
    </Root>
  );
};

const Root = styled.div`
  margin-top: 20px;
  width: 100px;
`;

const MyTitle = styled(Title)`
  text-align: center;
`;

export default Points;
