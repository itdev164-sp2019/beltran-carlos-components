import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

export const BaseShareButton = ({
    linkTitle,
    linkClassName,
    linkEventLabel,
    addThisPubId,
    googleAnalyticsId,
    contentTitle,
    contentImage,
    contentDescription,
    children,
}) => {
    const id = 'social-share'
    const src = '//s7.addthis.com/js/300/addthis_widget.js#pubid=' + addThisPubId
    const options = {
        config: {
            data_ga_property: googleAnalyticsId,
            data_ga_social: true,
            ui_click: true,
        },
        share: {
            url_transforms: {
                shorten: {
                    twitter: 'bitly',
                },
            },
            shorteners: {
                bitly: {},
            },
            title: contentTitle,
            media: contentImage,
            description: contentDescription,
        },
    }

    useEffect(() => {
        window.addthis_config = options.config
        window.addthis_share = options.share

        return () => {
            delete window.addthis_config
            delete window.addthis_share
        }
    })

    useEffect(() => {
        if(document.getElementById(id)) return

        const script = document.createElement('script')
        script.id = id
        script.src = src
        script.async = true
        document.body.appendChild(script)
    }, [])

    return (
        <div>
        <a
        href="#"
        title={linkTitle}
        className={linkClassName}
        data-eventcategory="Social Share"
        data-eventlabel={linkEventLabel}
        >
        {children}
        </a>
        </div>
    )
}

BaseShareButton.propTypes = {
    linkTitle: PropTypes.string.isRequired,
    linkClassName: PropTypes.string.isRequired,
    linkEventLabel: PropTypes.string.isRequired,
    addThisPubId: PropTypes.string.isRequired,
    googleAnalyticsId: PropTypes.string.isRequired,
    contentTitle: PropTypes.string.isRequired,
    contentImage: PropTypes.string.isRequired,
    contentDescription: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

