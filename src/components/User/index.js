import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import styled from 'styled-components';
import Header from '../shared/Header';
import { fetchCurrentUser } from '../../features/user/userActions';

import Wrapper from '../shared/Wrapper';
const User = () => {
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();

  useEffect(
    () => {
      if (!profile) dispatch(fetchCurrentUser());
    },
    [ profile, dispatch ],
  );
  return (
    <Wrapper px pb pt>
      <Header {...profile} />
    </Wrapper>
  );
};

export default User;
