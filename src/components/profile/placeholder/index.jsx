import React from 'react'

import {profile_data, picture, content} from '../profile_data/styles.scss'
import {header_bar, content_large, content_small, picture_block, content_block} from './styles.scss'

export const Placeholder = () => (
  <div className={profile_data}>
    <div className={`${picture} ${picture_block}`} />
    <div className={`${content} ${content_block}`}>
      <div className={header_bar} />
      <div className={content_large} />
      <div className={content_large} />
      <div className={content_large} />
      <div className={content_large} />
      <div className={content_small} />
    </div>
  </div>
)