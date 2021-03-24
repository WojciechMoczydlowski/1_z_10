import styled from "styled-components";
import Header from "./Header";
import { spacing, colors } from "styles/variables";
import background from "./background.jpg";

const AppLayout = ({ name, children }) => {
  return (
    <Container background={background}>
      <Image src={background} />
      <Header name="Finał" />
      <Content>{children}</Content>
    </Container>
  );
};

const Container = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  height: 100vh;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -10;

  height: 100vh;
  width: 100vw;

  opacity: 0.4;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: ${spacing.medium};
`;

export default AppLayout;
