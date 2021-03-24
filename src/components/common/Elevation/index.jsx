import styled from "styled-components";
import { colors } from "styles/variables";

const Elevation = ({className, children}) => {
  return (
    <Root className={className}>
      {children}
    </Root>
  );
};

const Root = styled.div`
  border-radius: 0.5rem;
  box-shadow: 0 0 6px #00000029;
`;

export default Elevation;
