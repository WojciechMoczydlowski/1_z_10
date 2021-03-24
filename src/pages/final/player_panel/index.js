import React from "react";
import styled from "styled-components";
import Elevation from "components/common/Elevation";
import { spacing, colors } from "styles/variables";
import PlayerName from "./name";
import Lives from "./stats/lives";
import Points from "./stats/points";
import { Button } from "antd";

const PlayerPanel = ({
  firstname,
  lastname,
  isSelected,
  score,
  life,
  selectPlayer,
  selectOpponent,
}) => {
  const isEliminated = life === 0;
  const backgroundColor =
    isEliminated || !isSelected ? colors.white : colors.blue;

  return (
    <Root backgroundColor={backgroundColor} faded={isEliminated}>
      <Content1>
        <PlayerName firstname={firstname} lastname={lastname} />
      </Content1>
      <Content2>
        <Points points={score} />
        <Lives life={life} />
      </Content2>
      <Content3>
        <Button onClick={selectPlayer}>Na siebie</Button>
        <Button onClick={selectOpponent}>Odpowiedź</Button>
      </Content3>
    </Root>
  );
};

const Root = styled(Elevation)`
  display: grid;
  grid-template-rows: 35% auto;

  width: 400px;
  margin-top: ${spacing.large};
  padding: ${spacing.medium};

  background-color: ${(props) => props.backgroundColor};
  opacity: ${({ faded }) => (faded ? 0.4 : 1)};
  pointer-events: ${({ faded }) => (faded ? "none" : "unset")};
`;

const Content1 = styled.div`
  grid-row-start: 1;
`;

const Content2 = styled.div`
  grid-row-start: 2;
  display: flex;
  justify-content: space-evenly;
`;

const Content3 = styled.div`
  display: flex;
  grid-row-start: 3;
  justify-content: space-evenly;
`;

export default PlayerPanel;
