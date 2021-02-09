import React from 'react';
import styled from 'styled-components';
import { XCircle } from 'react-bootstrap-icons';

const StyledErrorPopup = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100vw;
  height: 3rem;
  padding: 0.5rem 0;
  background-color: red;
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;

const ErrorMessage = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CloseButton = styled.button`
  background-color: transparent;
  color: white;
  cursor: pointer;
  align-self: flex-start;
`;

const ErrorPopup = ({ hideError, children }) => (
  <StyledErrorPopup>
    <CloseButton type="button" onClick={hideError}>
      <XCircle size="20" />
    </CloseButton>
    <ErrorMessage>{children}</ErrorMessage>
  </StyledErrorPopup>
);

export default ErrorPopup;
