import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img`object-fit: cover;`;

const StyledImageWrapper = styled.div.attrs((props) => ({
  maxWidth: props.maxWidth || '50%',
  maxHeight: props.maxHeight || 'auto',
  marginBottom: props.marginBottom || '1rem',
  size: props.size ? `${props.size}px` : '100%',
  boxShadow: props.boxShadow && '0px 0px 30px 0px rgba(0,0,0,0.50)',
}))`
  max-width: ${(props) => props.maxWidth};
  height: ${(props) => props.maxHeight};
  margin-bottom: ${(props) => props.marginBottom};

  ${StyledImage} {
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    box-shadow: ${(props) => props.boxShadow};
  }
`;

const ImageWrapper = ({
  src,
  alt,
  marginBottom,
  maxWidth,
  maxHeight,
  size,
  boxShadow,
}) => {
  return (
    <StyledImageWrapper
      marginBottom={marginBottom}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      size={size}
      boxShadow={boxShadow}
    >
      <StyledImage src={src} alt={alt} />
    </StyledImageWrapper>
  );
};

export default ImageWrapper;
