import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import Button from '../shared/Button';
import { logout } from '../../features/auth/authActions';

function LougoutButton() {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(logout());
  };

  useEffect(() => {
    return () => {
      //clean-up function
      window.removeEventListener('click', handleOnClick);
    };
  }, []);

  return (
    <StyledButton type="button" onClick={handleOnClick}>
      Déconnexion
    </StyledButton>
  );
}

const StyledButton = styled(Button)`
  display: block;
  margin: 2rem auto;
`;

export default LougoutButton;
