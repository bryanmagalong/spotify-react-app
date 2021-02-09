import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => props.column && 'column'};
`;

export default Wrapper;
