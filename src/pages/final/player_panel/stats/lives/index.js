import React from "react";
import styled from "styled-components";
import { HeartTwoTone } from "@ant-design/icons";

const Lives = ({ life }) => {
  let style = {
    fontSize: "50px",
  };

  return (
    <Root>
      <Content>
        {life >= 1 && <HeartTwoTone style={style} twoToneColor="#eb2f96" />}
        {life >= 2 && <HeartTwoTone style={style} twoToneColor="#eb2f96" />}
        {life >= 3 && <HeartTwoTone style={style} twoToneColor="#eb2f96" />}
      </Content>
    </Root>
  );
};

const Root = styled.div`
  margin-top: 20px;
  width: auto;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export default Lives;
