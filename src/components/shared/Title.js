import styled from 'styled-components';

export const Title = ({ level, children }) => {
  const tag = level ? `h${level}` : 'h1';

  return <StyledTitle as={tag}>{children}</StyledTitle>;
};

export const StyledTitle = styled.h1`
  text-transform: uppercase;
  font-weight: bold;
  color: #fff;
  padding-bottom: ${(props) => props.pb && '1rem'};

  font-size: ${(props) => {
    if (props.as === 'h2') return props.theme.fontSize.lg;
    return props.theme.fontSize.xl;
  }};
`;
