'use strict'
import React, { Component } from 'react'
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      orgs: [],
      isFetching: false
    }
  }

  getGitHubApiUrl (username, type) {
    const internalType = type ? `/${type}` : ''
    const internalUser = username ? `${username}` : ''
    return `https://api.github.com/users/${internalUser}${internalType}`
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.whic || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      this.setState({ isFetching: true })

      ajax().get(this.getGitHubApiUrl(value))
        .then((result) => {
          this.setState({
            userinfo: {
              username: result.name,
              login: result.login,
              photo: result.avatar_url,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following,
              starred: result.starred_url,
              orgs: result.organizations_url
            },
            repos: [],
            starred: [],
            orgs: []
          })
        })
        .always(() => {
          this.setState({ isFetching: false })
        })
    }
  }

  getRepos (type) {
    return (e) => {
      const username = this.state.userinfo.login
      ajax().get(this.getGitHubApiUrl(username, type))
        .then((result) => {
          this.setState({
            [type]: result.map((repo) => {
              return {
                avatar: repo.avatar_url || null,
                name: repo.name || repo.login,
                link: repo.html_url || `https://github.com/${repo.login}`
              }
            })
          })
        })
    }
  }

  render () {
    return (
      <AppContent
        {...this.state}
        handleSearch={(e) => this.handleSearch(e)}
        getRepos={this.getRepos('repos')}
        getStars={this.getRepos('starred')}
        getOrgs={this.getRepos('orgs')}
      />
    )
  }
}

export default App
