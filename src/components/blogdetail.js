import React from "react"

const BlogDetail = props => (
  <section
    style={{
      margin: `30px 0px`,
    }}
  >
    <img alt={props.detailImage.alt} src={props.detailImage.url} />
    <div>
      <span>{props.writtenOn}</span>
      {props.writtenBy.map(wr => {
        return <h6 key={wr}>{wr.text}</h6>
      })}
    </div>
    <div>
      {props.heading.map(h => {
        return <h2 key={h}>{h.text}</h2>
      })}
    </div>
    <div>
      {props.description.map(para => {
        return <p key={para}>{para.text}</p>
      })}
    </div>
  </section>
)

export default BlogDetail
