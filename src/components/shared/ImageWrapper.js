import React from 'react';
import styled from 'styled-components';

const ImageWrapper = ({
  src,
  alt,
  marginBottom,
  maxWidth,
  maxHeight,
  size,
  boxShadow,
  type,
}) => {
  return (
    <StyledImageWrapper
      marginBottom={marginBottom}
      maxWidth={maxWidth}
      maxHeight={maxHeight}
      size={size}
      boxShadow={boxShadow}
      type={type}
    >
      <StyledImage src={src} alt={alt} loading="lazy" />
    </StyledImageWrapper>
  );
};

const StyledImage = styled.img`object-fit: cover;`;

const StyledImageWrapper = styled.div.attrs((props) => ({
  borderRadius: (props.type === 'user' || props.type === 'artist') && '100%',
  maxWidth: props.maxWidth || '50%',
  maxHeight: props.maxHeight || 'auto',
  marginBottom: props.marginBottom || '1rem',
  size: props.size ? `${props.size}px` : '100%',
  boxShadow: props.boxShadow && '0px 0px 30px 0px rgba(178,178,178,0.40)',
}))`
  max-width: ${(props) => props.maxWidth};
  height: ${(props) => props.maxHeight};
  margin-bottom: ${(props) => props.marginBottom};

  ${StyledImage} {
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    box-shadow: ${(props) => props.boxShadow};
    border-radius: ${(props) => props.borderRadius}

  }
`;

export default ImageWrapper;
