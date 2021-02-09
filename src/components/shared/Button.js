import styled from 'styled-components';

const ButtonStyled = styled.button`
  background-color: ${(props) => props.theme.colors.green};
  color: #fff;
  padding: 1.15rem 3.5rem;
  border-radius: 2.25rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
`;

export default ButtonStyled;
