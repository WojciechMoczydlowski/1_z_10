import styled from "styled-components";
import Header from "./Header";

const AppLayout = ({ children }) => {
  return (
    <Container>
      <Header />
      <div>{children}</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default AppLayout;
