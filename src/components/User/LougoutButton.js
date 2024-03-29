import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import Button from "../shared/Button";
import { logout } from "../../features/auth/authActions";

function LougoutButton() {
  const dispatch = useDispatch();
  const handleOnClick = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    return () => {
      //clean-up function
      window.removeEventListener("click", handleOnClick);
    };
  }, [handleOnClick]);

  return (
    <StyledButton type="button" onClick={handleOnClick}>
      Déconnexion
    </StyledButton>
  );
}

const StyledButton = styled(Button)`
  display: block;
  background-color: transparent;
  border: 1px #fff solid;
  transition: all ease-in-out 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.colors.green};
    border: 1px ${(props) => props.theme.colors.green} solid;
  }
`;

export default LougoutButton;
