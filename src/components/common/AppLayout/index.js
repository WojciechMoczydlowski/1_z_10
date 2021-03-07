import styled from "styled-components";
import Header from "./Header";
import { spacing } from "styles/variables";

const AppLayout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  margin-top: ${spacing.medium};
`;

export default AppLayout;
