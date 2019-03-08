import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Header } from '../../Element'

const StyledHeader = styled(Header)`
    ${props => props.theme.defaults.masthead};
`

export const DefaultLayout = ({ image }) => (
    <StyledHeader>
        <img src={image} alt="" />
    </StyledHeader>
)

DefaultLayout.propTypes = {
    image: PropTypes.node.isRequired
}
