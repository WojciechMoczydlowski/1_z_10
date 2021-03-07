import styled from "styled-components";
import Elevation from "components/common/Elevation";
import { spacing, fontSize } from "styles/variables";

const Header = () => {
  return (
    <Elevation>
      <Content>
        <Home>Calendar</Home>
      </Content>
    </Elevation>
  );
};

const Content = styled.div`
  display: flex;
  align-items: center;

  padding: ${spacing.medium};
`;

const Home = styled.div`
  margin-right: ${spacing.medium};

  font-size: ${fontSize.body};
  font-weight: 600;
`;

export default Header;
