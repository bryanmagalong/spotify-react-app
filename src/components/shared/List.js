import styled from 'styled-components';

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(128px, 1fr));
  gap: 1rem;
  padding: ${props => props.gutter ?? "1rem 0"};

  @media (min-width: ${(props) => props.theme.media.md}) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }

  @media (min-width: ${(props) => props.theme.media.lg}) {
    gap: 2rem;
  }
`;

export default List;
