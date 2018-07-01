'use strict'
import React, { PropTypes } from 'react'

const Orgs = ({ className, title, orgs }) => (
  <div className={className}>
    <h2>{title}</h2>
    <ul>
      {orgs.map((org, index) => (
        <li key={index}>
          <img src={org.avatar} />
          <a href={org.link}>{org.name}</a>
        </li>
      ))}
    </ul>
  </div>
)
Orgs.defaultProps = {
  className: ''
}

Orgs.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  orgs: PropTypes.array.isRequired
}
export default Orgs
