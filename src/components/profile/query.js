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
    allAccomplishmentses {
      title
      description
    }
    allLinkses {
      email
      facebook
      instagram
      resume
    }
  }
`
