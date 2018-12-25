import gql from 'graphql-tag'

export const getLoginUser = gql`
    query {
        viewer {
            login
        }
    }
`

export const test = gql`
    query {
        viewer {
            login
            repositories(last: 10) {
                nodes {
                    description
                }
            }
        }
    }
`

// export const getRepos = gql``
