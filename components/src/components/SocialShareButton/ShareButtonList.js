import React from 'react'
import PropTypes from 'prop-types';
import {Flex} from 'rebass'

import {
    FacebookShareButton,
    TwitterShareButton,
    MoreShareButton,
} from './index'

export const ShareButtonList = props => (
    <Flex flexDirection="column">
        <FacebookShareButton {...props} />
        <TwitterShareButton {...props} />
        <MoreShareButton {...props} />
    </Flex>
)

ShareButtonList.propTypes = {
    addThisPubId: PropTypes.string.isRequired,
    googleAnalyticsId: PropTypes.string.isRequired,
    contentTitle: PropTypes.string.isRequired,
    contentImage: PropTypes.string.isRequired,
    contentDescription: PropTypes.string.isRequired,
}
