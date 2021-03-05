import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  width: ${(props) => props.fullWidth && '100%'};
  display: ${(props) => props.flex && 'flex'};
  flex-direction: ${(props) => props.column && 'column'};
  align-items: ${(props) => props.itemsCenter && 'center'};
  padding-bottom: ${(props) => props.pb && '10rem'};
  padding-top: ${(props) => props.pt && '1.5rem'};

  @media (min-width: ${(props) => props.theme.media.lg}) {
    padding-bottom: 0;
  }

  ${(props) =>
    props.px &&
    css`
      padding-left: 1rem;
      padding-right: 1rem;

      @media (min-width: ${(props) => props.theme.media.lg}) {
        padding-left: 2rem;
        padding-right: 2rem;
      }
    `};
`;

export default Wrapper;
