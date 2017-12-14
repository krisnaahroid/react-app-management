import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import config from 'config'
import { mapToCssModules } from './Utils'

const { asset_url: assetUrl } = config

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
  src: PropTypes.string,
  alt: PropTypes.string,
  circle: PropTypes.bool,
  rounded: PropTypes.bool,
  thumbnail: PropTypes.bool,
}

const defaultProps = {
  tag: 'img',
}

const imageSource = (src) => {
  if (assetUrl) {
    return assetUrl + src
  }

  return src
}

export const Image = (props) => {
  const {
    className,
    cssModule,
    src,
    alt,
    circle,
    rounded,
    thumbnail,
    tag: Tag,
    ...attributes
  } = props

  const classes = mapToCssModules(classNames(
    className,
    {
      'img-circle': circle,
      'img-rounded': rounded,
      'img-thumbnail': thumbnail,
    }
  ), cssModule)

  return (
    <Tag {...attributes} src={imageSource(src)} alt={alt} className={classes} />
  )
}

Image.propTypes = propTypes
Image.defaultProps = defaultProps
