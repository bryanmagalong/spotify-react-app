import React from 'react';
import PropTypes from 'prop-types';
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

//===== PropTypes
ImageWrapper.defaultProps = {
  alt: '',
  type: 'track',
  marginBottom: '1rem',
  maxWidth: '50%',
  maxHeight: 'auto',
};

ImageWrapper.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  type: PropTypes.oneOf([ 'user', 'album', 'playlist', 'track', 'artist' ])
    .isRequired,
  marginBottom: PropTypes.string,
  maxWidth: PropTypes.string,
  maxHeight: PropTypes.string,
  size: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]),
  boxShadow: PropTypes.bool,
};
//===== Styles
const StyledImage = styled.img`object-fit: cover;`;

const StyledImageWrapper = styled.div.attrs((props) => ({
  borderRadius: (props.type === 'user' || props.type === 'artist') && '100%',
  maxWidth: props.maxWidth,
  maxHeight: props.maxHeight,
  marginBottom: props.marginBottom,
  size: props.size ? `${props.size}px` : '100%',
  boxShadow: props.boxShadow && '0px 0px 30px 0px rgba(21,21,21,0.50)',
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
