import React from "react"
import PropTypes from "prop-types"
import Image from "./image"

const Header = ({ siteTitle }) => (
  <header
    sitetitle={siteTitle || `Title`}
    style={{
      background: `#F3F3F3`,
      padding: `0.4rem`, margin: `auto`
    }}
  >
    <div
      style={{
        padding: `10px`, margin: `auto`
      }}
    >
      <Image />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
