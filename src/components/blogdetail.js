import React from "react"

const BlogDetail = props => (
  <>
    <section>
      {/* <img alt={props.thumbnail.alt} src={props.thumbnail.url} />
      <div>
        <span>Written by :{props.written_by}</span>
        <span>Published on :{props.written_on}</span>
      </div>
      <div>{props.heading}</div>
      <div>{props.description}</div> */}
      <div>{props.id}</div>
    </section>
  </>
)

export default BlogDetail
