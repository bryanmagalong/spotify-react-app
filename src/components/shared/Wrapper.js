import styled from 'styled-components';

const Wrapper = styled.div`
  width: ${(props) => props.fullWidth && '100%'};
  display: ${(props) => props.flex && 'flex'};
  flex-direction: ${(props) => props.column && 'column'};
  padding-bottom: ${(props) => props.pb && '10rem'};
  padding-top: ${(props) => props.pt && '3.75rem'};

  @media (min-width: ${(props) => props.theme.media.lg}) {
    padding-bottom: 0;
  }
`;

export default Wrapper;
