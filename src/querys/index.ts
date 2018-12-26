import gql from 'graphql-tag'

export const getLoginUser = gql`
    query {
        viewer {
            login
        }
    }
`

export const getViewerRepos = gql`
    query($offset: Int = 10) {
        viewer {
            login
            repositories(first: $offset) {
                nodes {
                    description
                    projectsUrl
                    name
                    updatedAt
                    stargazers {
                        totalCount
                    }
                    languages(first: 1) {
                        nodes {
                            name
                        }
                    }
                }
            }
        }
    }
`

// export const getRepos = gql``
