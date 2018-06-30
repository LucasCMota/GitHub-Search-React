import React, { PropTypes } from 'react'
import Repos from './repos'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'

const AppContent = ({ userinfo, repos, starred, handleSearch, getRepos, getStars }) => (
  <div className='app'>
    <Search handleSearch={handleSearch} />
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions getRepos={getRepos} getStars={getStars} />}

    {!!repos.length &&
      <Repos
        className='repos'
        title='Repositorios'
        repos={repos}
      />
    }
    {!!starred.length &&
      <Repos
        className='starred'
        title='Favoritos'
        repos={starred}
      />
    }
  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired
}
export default AppContent
