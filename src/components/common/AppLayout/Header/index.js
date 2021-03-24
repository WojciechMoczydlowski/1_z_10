import styled from "styled-components";
import Elevation from "components/common/Elevation";
import { spacing, fontSize, colors } from "styles/variables";

const Header = (props) => {
  return (
    <Elevation>
      <Content>
        <Home>{props.name}</Home>
      </Content>
    </Elevation>
  );
};



const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing.medium};
  color: ${colors.white};
  background-color: ${colors.blue};
`;

const Home = styled.div`
  margin-right: ${spacing.medium};

  font-size: ${fontSize.header1};
  font-weight: 600;
`;

export default Header;
