import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../../../../../styles/variables";

const NavItem = ({ href, isActive, children }) => {
  return (
    <Root>
      <DefaultLink isActive={isActive} to={href}>
        {children}
      </DefaultLink>
    </Root>
  );
};

const Root = styled.li`
  margin-right: 0.5rem;

  list-style-type: none;
`;

const DefaultLink = styled(Link)`
  color: ${(props) => (props.isActive ? colors.primary : colors.body)};
  text-decoration: inherit;

  &:hover {
    opacity: 0.6;
  }
`;

export default NavItem;
