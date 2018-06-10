import gql from "graphql-tag"

export const GET_PROFILE = gql`
  query {
    allAboutNicks(first: 1) {
      displayName,
      profilePicture {
        url
      },
      about
    }
  }
`
