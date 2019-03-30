//@flow
import React from 'react';
import PropTypes from 'prop-types'
import { ThemeConsumer } from 'styled-components'
import { IconButton } from '../Element'

export const MenuButton = (props:PropTypes.node) => (
    <ThemeConsumer>
        {theme => <IconButton icon={theme.icons.Menu} {...props} />}
    </ThemeConsumer>
)

MenuButton.propTypes = {
    variant: PropTypes.string
}