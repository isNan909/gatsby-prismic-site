import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Blogdetail from "../components/blogdetail"

class Blogdetailpage extends Component {
  render() {
    const  id  = this.props.id
    return (
      <Layout>
        <SEO title="Page two" />
        <Link to={`/`}>Go back</Link>
        <Blogdetail id={id} />
      </Layout>
    )
  }
}

export default Blogdetailpage

export const blogQuery = graphql`
  query Blog($slug: String) {
    blog: prismicArticles(id: { eq: $slug }) {
      data {
        heading {
          text
        }
      }
      id
      slugs
    }
  }
`
