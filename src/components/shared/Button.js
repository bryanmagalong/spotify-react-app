import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonStyled = styled(Link)`
  background-color: ${(props) => props.theme.colors.green};
  color: #fff;
  padding: 1.15rem 3.5rem;
  border-radius: 2.25rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
`;

export default ButtonStyled;
