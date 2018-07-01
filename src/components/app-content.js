import React, { PropTypes } from 'react'
import Repos from './repos'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Orgs from './orgs'

const AppContent = ({ userinfo, repos, starred, orgs, handleSearch, getRepos, getStars, getOrgs }) => (
  <div className='app'>
    <Search handleSearch={handleSearch} />
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
        title='favoritos'
        repos={starred}
      />
    }

    {!!orgs.length &&
      <Orgs
        className='orgs'
        title='organizações'
        orgs={orgs}
      />
    }

  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  orgs: PropTypes.array.isRequired
}

export default AppContent
