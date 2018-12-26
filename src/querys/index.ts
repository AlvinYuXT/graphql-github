import gql from 'graphql-tag'

export const repos = gql`
    fragment repository on Repository {
        id
        name
        url
        descriptionHTML
        primaryLanguage {
            name
        }
        owner {
            login
            url
        }
        stargazers {
            totalCount
        }
        viewerHasStarred
        watchers {
            totalCount
        }
        viewerSubscription
    }
`


export const getViewerRepos = gql`
    query($size: Int = 10) {
        viewer {
            login
            repositories(first: $size) {
                nodes {
                    ...repository
                }
            }
        }
    }
    ${repos}
`
