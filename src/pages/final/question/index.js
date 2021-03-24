import React from "react";
import styled from "styled-components";
import { Button } from "antd";

const Question = (props) => {
  return (
    <Root>
      <Content1>{props.content}</Content1>
      <Content2>
        <Button
          type="primary"
          style={{
            backgroundColor: "#60C720",
            borderColor: "#60C720",
            marginRight: "30px",
            width: "150px",
          }}
          size="large"
        >
          Dobrze
        </Button>
        <Button
          type="primary"
          style={{
            backgroundColor: "#EA3A3A",
            borderColor: "#EA3A3A",
            marginLeft: "30px",
            width: "150px",
          }}
          size="large"
        >
          Źle
        </Button>
      </Content2>
    </Root>
  );
};

const Root = styled.div`
  width: 1638px;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  margin-top: 50px;
  font-size: 48px;
  display: grid;
  grid-template-rows: 80% auto;
`;

const Content1 = styled.div`
  grid-row-start: 1;
`;

const Content2 = styled.div`
  grid-row-start: 2;
`;

export default Question;
