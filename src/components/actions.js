'use strict'
import React from 'react'
import Button from './button'

const Actions = ({ getRepos, getStars }) => (
  <div className='actions'>
    <Button children={'Ver Repositorios'} handleClick={getRepos} />
    <Button children={'Ver Favoritos'} handleClick={getStars} />
  </div>
)

export default Actions
