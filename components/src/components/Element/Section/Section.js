import React from 'react'
import PropTypes from 'prop-types'
import {BaseContainer} from '../BaseContainer'

export const Section = (props:PropTypes.node) => <BaseContainer as="section" {...props} />

Section.propTypes = {
    children: PropTypes.node.isRequired
}