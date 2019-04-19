import React from 'react';
import PropTypes from 'prop-types'
import styled, {ThemeConsumer} from 'styled-components'

import { BaseShareButton } from './BaseShareButton'

const Image = styled.img`
    ${props => props.theme.defaults.socialShareButton.img};
`

const linkTitle = 'Share this on Twitter',
    linkClassName = 'addthis_button_twitter',
    linkEventLabel = 'Twitter'

export const TwitterShareButton = props => (
    <BaseShareButton
        linkTitle={linkTitle}
        linkClassName={linkClassName}
        linkEventLabel={linkEventLabel}
        {...props}
    >
        <ThemeConsumer>
            {theme => <Image src={theme.images.shareTwitterImage} alt={linkTitle} />}
        </ThemeConsumer>
    </BaseShareButton>
)

TwitterShareButton.propTypes = {
    addThisPubId: PropTypes.string.isRequired,
    googleAnalyticsId: PropTypes.string.isRequired,
    contentTitle: PropTypes.string.isRequired,
    contentImage: PropTypes.string.isRequired,
    contentDescription: PropTypes.string.isRequired,
}
