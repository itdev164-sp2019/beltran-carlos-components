// @flow
import React from 'react'
import PropTypes from 'prop-types'
import {BaseContainer} from '../BaseContainer'

export const Main = (props:PropTypes.node) => <BaseContainer as="main" {...props} />

Main.propTypes = {
    children: PropTypes.node.isRequired
}