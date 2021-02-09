import styled from 'styled-components';

export const TitleStyled = styled.h1`
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;

  font-size: ${(props) => {
    if (props.as === 'h2') return props.theme.fontSize.lg;
    return props.theme.fontSize.xl;
  }};
`;

export const Title = ({ level, children }) => {
  const tag = level ? `h${level}` : 'h1';

  return <TitleStyled as={tag}>{children}</TitleStyled>;
};
