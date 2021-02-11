import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: ${(props) => props.flex && 'flex'};
  flex-direction: ${(props) => props.column && 'column'};
  padding-bottom: ${(props) => props.pb && '10rem'};

  @media (min-width: ${(props) => props.theme.media.lg}) {
    padding-bottom: 0;
  }
`;

export default Wrapper;
