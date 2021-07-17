import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { XCircle } from 'react-bootstrap-icons';
import { hideError } from '../../features/errors/errorActions';

const ErrorPopup = ({ children }) => {
  const dispatch = useDispatch();
  return (
    <StyledErrorPopup>
      <CloseButton type="button" onClick={() => dispatch(hideError())}>
        <XCircle size="20" />
      </CloseButton>
      <ErrorMessage>{children}</ErrorMessage>
    </StyledErrorPopup>
  );
};

//===== Styles
const StyledErrorPopup = styled.div`
  position: sticky;
  top: 0px;
  width: 100%;
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

export default ErrorPopup;
