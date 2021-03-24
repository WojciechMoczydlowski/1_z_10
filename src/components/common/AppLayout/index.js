import styled from "styled-components";
import Header from "./Header";
import { spacing, colors } from "styles/variables";

const AppLayout = ({ name, children }) => {
  return (
    <Container>
      <Header name="Finał" />
      <Content>{children}</Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;

  background-color: ${colors.lightblue};
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin-top: ${spacing.medium};
`;

export default AppLayout;
