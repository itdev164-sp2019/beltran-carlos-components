//@flow

import React from 'react'
import PropTypes from 'prop-types'
import {BaseContainer} from '../BaseContainer'


type Props = {
    children: PropTypes.node
}


export const Footer = (props: Props) => <BaseContainer as="footer" {...props} />


Footer.propTypes = {
    children: PropTypes.node.isRequired
}