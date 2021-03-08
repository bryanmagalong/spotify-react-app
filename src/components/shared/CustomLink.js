import styled from 'styled-components';

const StyledCustomLink = styled.a.attrs((props) => ({
  target: '_blank',
  rel: 'noreferrer noopener',
}))`

  &:hover {
    text-decoration: underline;
  }
`;

export default StyledCustomLink;
