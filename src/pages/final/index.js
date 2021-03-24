import React from "react";
import styled from "styled-components";
import PlayerPanel from "pages/final/player_panel";
import Question from "./question";
import useCurrentPlayer from "./useCurrentPlayer";
import usePlayers from "./usePlayers";
import { colors } from "styles/variables";

const Final = (props) => {
  const { currentPlayer, isOpponent, selectPlayer } = useCurrentPlayer();
  const { playersScore, playersLife, answerQuestion } = usePlayers();

  return (
    <Root>
      <Content>
        <Question
          content="Gdzie znajdziesz mechanizm różnicowy? W silniku, lusterkach elektrycznych, zespole przeniesienia napędu czy skrzyni biegów? "
          answerQuestion={(isCorrect) =>
            answerQuestion(currentPlayer, isOpponent, isCorrect)
          }
        />
      </Content>
      <Players>
        <Content2>
          <PlayerPanel
            firstname="Ania"
            lastname="Kowalska"
            life={playersLife[0]}
            score={playersScore[0]}
            isSelected={currentPlayer === 0}
            selectPlayer={() => selectPlayer(0)}
            selectOpponent={() => selectPlayer(0, true)}
          />
          <PlayerPanel
            firstname="Piotr"
            lastname="Borowski"
            life={playersLife[1]}
            score={playersScore[1]}
            isSelected={currentPlayer === 1}
            selectPlayer={() => selectPlayer(1)}
            selectOpponent={() => selectPlayer(1, true)}
          />
          <PlayerPanel
            firstname="Babcia"
            lastname="Krysia"
            life={playersLife[2]}
            score={playersScore[2]}
            isSelected={currentPlayer === 2}
            selectPlayer={() => selectPlayer(2)}
            selectOpponent={() => selectPlayer(2, true)}
          />
        </Content2>
      </Players>
    </Root>
  );
};

const Root = styled.div`
  display: grid;
  grid-template-rows: 350px auto;
`;

const Content = styled.div`
  grid-row-start: 1;

  background-color: ${colors.white};
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
