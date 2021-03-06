import React, {Fragment} from 'react'
import {Query} from 'react-apollo'
import isEmpty from 'lodash/isEmpty'
import map from 'lodash/map'
import ReactGallery from 'react-grid-gallery'

import {GET_IMAGES} from './query'
import styles from './styles.scss'

import {Placeholder} from './placeholder'

export const Gallery = () => {
  return (
    <Query query={GET_IMAGES}>
      {({ loading, error, data }) => {
        let images = []

        if (!isEmpty(data)) {
          images = map(data.allImageses, image => ({
            src: image.picture.url,
            thumbnail: image.picture.url,
            thumbnailHeight: image.picture.height,
            thumbnailWidth: image.picture.width,
            caption: image.description
          }))
        }

        return (
          <Fragment>
            {loading && <Placeholder />}
            {!isEmpty(images) && (
              <div className={styles.gallery}>
                <ReactGallery
                  images={images}
                  enableImageSelection={false}
                  showLightboxThumbnails
                />
              </div>
            )}
          </Fragment>
        )
      }}
    </Query>
  )
}