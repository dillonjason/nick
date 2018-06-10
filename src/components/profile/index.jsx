import React, {Fragment} from 'react'
import {Query} from 'react-apollo'

import {GET_PROFILE} from './query'

import {Error} from './error'
import {Placeholder} from './placeholder'
import {ProfileData} from './profile_data'

export const Profile = () => {
  return (
    <Query query={GET_PROFILE}>
      {({ loading, error, data }) => {
        console.log(data)
        return (
          <Fragment>
            {loading && <Placeholder />}
            {error && <Error />}
            {!loading && data && <ProfileData {...data.allAboutNicks[0]} accomplishments={data.allAccomplishmentses} />}
          </Fragment>
        )
      }}
    </Query>
  )
}