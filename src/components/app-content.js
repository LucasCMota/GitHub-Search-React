import React, { PropTypes } from 'react'
import Repos from './repos'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'

const AppContent = ({ userinfo, repos, isFetching, orgs, starred, handleSearch, getRepos, getStars, getOrgs }) => (
  <div className='app'>
    <Search isDisabled={isFetching} handleSearch={handleSearch} />
    {isFetching && <div>LOADING...</div>}
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions getRepos={getRepos} getStars={getStars} getOrgs={getOrgs} />}

    {!!repos.length &&
      <Repos
        className='repos'
        title='Repositorios'
        repos={repos}
      />
    }

    {!!starred.length &&
      <Repos
        className='repos'
        title='Favoritos'
        repos={starred}
      />
    }

    {!!orgs.length &&
      <Repos
        className='repos'
        title='Organizações'
        repos={orgs}
      />
    }

  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  orgs: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getOrgs: PropTypes.func.isRequired,
  getStars: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired
}

export default AppContent
