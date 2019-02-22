import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/layout"
import Image from "../gatsby-components/image"
import SEO from "../gatsby-components/seo"
import { Address, Button, IconButton, Section} from "../components/Element"
import {Search} from 'styled-icons/feather'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Address>
      Address: 9467 Main St. 
      <Button variant={"primary"}>Contact me</Button>
    </Address>
    <Section flex justifyContent="space-evenly" m={2}>
        <Link to="/page-2/">Go to Page 2</Link>
        <Button variant="primary">Custom Button!</Button>
        <IconButton icon={<Search />} />
      </Section>
  </Layout>
)

export default IndexPage
