'use strict'
import React, { PropTypes } from 'react'
import Button from './button'

const Actions = ({ getRepos, getStars, getOrgs }) => (
  <div className='actions'>
    <Button children={'Ver Repositorios'} handleClick={getRepos} />
    <Button children={'Ver Favoritos'} handleClick={getStars} />
    <Button children={'Ver Orgs'} handleClick={getOrgs} />
  </div>
)

Actions.propTypes = {
  getRepos: PropTypes.func.isRequired,
  getStars: PropTypes.func.isRequired,
  getOrgs: PropTypes.func.isRequired
}

export default Actions
