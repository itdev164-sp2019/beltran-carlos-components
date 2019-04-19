import React from 'react';
import PropTypes from 'prop-types'
import styled, {ThemeConsumer} from 'styled-components'

import { BaseShareButton } from './BaseShareButton'

const Image = styled.img`
    ${props => props.theme.defaults.socialShareButton.img};
`

const linkTitle = 'More sharing options',
    linkClassName = 'addthis_button_compact',
    linkEventLabel = 'More'

export const MoreShareButton = props => (
    <BaseShareButton
        linkTitle={linkTitle}
        linkClassName={linkClassName}
        linkEventLabel={linkEventLabel}
        {...props}
    >
        <ThemeConsumer>
            {theme => <Image src={theme.images.shareMoreImage} alt={linkTitle} />}
        </ThemeConsumer>
    </BaseShareButton>
)

MoreShareButton.propTypes = {
    addThisPubId: PropTypes.string.isRequired,
    googleAnalyticsId: PropTypes.string.isRequired,
    contentTitle: PropTypes.string.isRequired,
    contentImage: PropTypes.string.isRequired,
    contentDescription: PropTypes.string.isRequired,
}
