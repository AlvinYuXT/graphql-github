import gql from 'graphql-tag'

export const getRates = gql`
    query getRates($currency: String!) {
        rates(currency: $currency) {
            currency
            rate
        }
    }
`

export const getLoginUser = gql`
    query {
        viewer {
            login
        }
    }
`
