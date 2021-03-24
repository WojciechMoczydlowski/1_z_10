import React from "react";
import styled from "styled-components";
import { Typography } from "antd";

const { Title } = Typography;

const PlayerName = (props) => {
  return (
    <Root>
      <MyTitle level={2}>
        {props.firstname} {props.lastname}
      </MyTitle>
    </Root>
  );
};

const Root = styled.div`
  grid-row-start: 1;
  width: auto;
`;

const MyTitle = styled(Title)`
  text-align: center;
`;

export default PlayerName;
