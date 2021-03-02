import React from 'react';
import styled from 'styled-components';

const StyledImageWrapper = styled.div.attrs((props) => ({
  maxWidth: props.maxWidth || '50%',
  marginBottom: props.marginBottom || '1rem',
  imgWidth: props.size ? `${props.size}px` : '100%',
  imgHeight: props.size && `${props.size}px`,
}))`
  max-width: ${(props) => props.maxWidth};
  height: auto;
  margin-bottom: ${(props) => props.marginBottom};

  & img {
    object-fit: cover;
    width: ${(props) => props.imgWidth};
    height: ${(props) => props.size && `${props.size}px`};
  }
`;

const ImageWrapper = ({ src, alt, marginBottom, maxWidth, size }) => {
  return (
    <StyledImageWrapper
      marginBottom={marginBottom}
      maxWidth={maxWidth}
      size={size}
    >
      <img src={src} alt={alt} />
    </StyledImageWrapper>
  );
};

export default ImageWrapper;
