import React, {Fragment} from 'react'
import {Query} from 'react-apollo'
import isEmpty from 'lodash/isEmpty'

import {GET_PROFILE} from './query'

import {Error} from './error'
import {Placeholder} from './placeholder'
import {ProfileData} from './profile_data'
import {Accomplishments} from './accomplishments'

export const Profile = () => {
  return (
    <Query query={GET_PROFILE}>
      {({ loading, error, data }) => {
        return (
          <Fragment>
            {loading && <Placeholder />}
            {error && <Error />}
            {!isEmpty(data) && (
              <Fragment>
                <ProfileData {...data.allAboutNicks[0]} />
                <Accomplishments accomplishments={data.allAccomplishmentses} />
              </Fragment>
            )}
          </Fragment>
        )
      }}
    </Query>
  )
}