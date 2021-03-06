import styled from "styled-components";

const Elevation = ({ onClick, className,children}) => {
  return (
    <Root className={className} onClick={onClick}>
      {children}
    </Root>
  );
};

const Root = styled.div`
  border-radius: 0.5rem;
  box-shadow: 0 0 6px #00000029;
`;

export default Elevation;
