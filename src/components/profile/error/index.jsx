import React from 'react'

import {profile_data, picture, content} from '../profile_data/styles.scss'

export const Error = () => (
  <div className={profile_data}>
    <div className={content}>
      <h1>Ooops!</h1>
      <p>
        Looks like I couldn't load the data.  Try reloading the page to see if that fixes things.
      </p>
    </div>
  </div>
)