import gql from "graphql-tag"

export const GET_IMAGES = gql`
  query {
    allImageses {
      description
      picture {
        url
        height
        width
      }
    }
  }
`
