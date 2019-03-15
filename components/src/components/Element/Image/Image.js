import React from 'react';
import PropTypes from 'prop-types';
import {Image as ImageBase} from 'rebass'

export const Image = ({src, ...props}) => <ImageBase src={src} {...props} />

Image.propTypes = {
    src: PropTypes.string.isRequired
}
