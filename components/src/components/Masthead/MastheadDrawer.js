import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Flex} from 'rebass'
import {Nav} from '../Element'

const Outer = styled(Flex)`
    position: fixed;
    top: ${props => props.top};
    height: ${props => props.height};
    width: 100%;
    transition: ${({ theme }) => theme.transitions.medium};
    transform: ${props => (props.open ? 'translateY(0)' : 'translateY(-100%)')};
    z-index: 9998;
    justify-content: center;
    ${props => props.theme.variants.mastheadDrawer[props.variant || 'primary']};
`

const Spacer = styled.div`
    position: static;
    width: 974px;
    height: ${props => props.height};
    display: flex;
    vertical-align: baseline;
    float: none;
`

export const MastheadDrawer = ({ variant, children, width, ...props }) => (
    <div>
        <Outer {...props}>
            <Nav
                flex
                alignItem="center"
                justifyContent="space-evenly"
                width={width}
                {...props}
            >
            {children}
            </Nav>
        </Outer>
        <Spacer {...props} />
    </div>
)

MastheadDrawer.propTypes = {
    variant: PropTypes.string,
    height: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    top: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}