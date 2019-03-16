import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import './layout.css'
import { ThemeProvider, ThemeConsumer} from 'styled-components'
import { Gray as theme } from '../themes/Gray'
import { Footer, Main } from '../components/Element'
import { Masthead, DefaultLayout } from '../components/Masthead'


export default class Layout extends Component {
  render() {
    const {children} = this.props

    return(
      <ThemeProvider theme={theme}>
          <StaticQuery
            query={graphql`
              query SiteTitleQuery {
                site {
                  siteMetadata {
                    title
                  }
                }
              }
            `}
            render={data => (
              <div>
                <Masthead height="85px">
                  <ThemeConsumer>
                    {theme => <DefaultLayout image={theme.images.mastheadImage} />}
                  </ThemeConsumer>
                </Masthead>
                <div
                  style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0px 1.0875rem 1.45rem`,
                    paddingTop: 0
                  }}
                >
                  <Main mt={85}>{children}</Main>
                  <Footer>
                    © {new Date().getFullYear()}, Built with 
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                  </Footer>
                </div>
              </div>
            )}
          />
        </ThemeProvider>
    )
  }
}


Layout.propTypes = {
  children: PropTypes.node.isRequired
}

