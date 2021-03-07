import styled from "styled-components";

const Elevation = ({children}) => {
  return (
    <Root>
      {children}
    </Root>
  );
};

const Root = styled.header`
  border-radius: 0.5rem;
  box-shadow: 0 0 6px #00000029;
`;

export default Elevation;
