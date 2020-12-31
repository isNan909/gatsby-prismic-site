import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Blogdetail from "../components/blogdetail"

class Blogdetailpage extends Component {
  render() {
    const { data } = this.props.data.blog
    const heading = data.heading
    const writtenBy = data.written_by
    const writtenOn = data.written_on
    const detailImage = data.detail_image
    const description = data.description
    return (
      <Layout>
        <SEO title="Page two" />
        <div
          style={{
            margin: `30px 0px`,
          }}
        >
          <Link to={`/`}>Go back</Link>
          <Blogdetail
            writtenOn={writtenOn}
            writtenBy={writtenBy}
            heading={heading}
            detailImage={detailImage}
            description={description}
          />
        </div>
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
        written_by {
          text
        }
        written_on
        description {
          text
        }
        detail_image {
          url
          alt
        }
      }
    }
  }
`
