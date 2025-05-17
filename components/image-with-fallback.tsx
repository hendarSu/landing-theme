"use client"

import { useState } from "react"
import Image, { type ImageProps } from "next/image"

type ImageWithFallbackProps = ImageProps & {
  fallbackSrc?: string
}

export function ImageWithFallback({
  src,
  alt,
  fallbackSrc = "/placeholder-image.png",
  ...rest
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [error, setError] = useState(false)

  return (
    <Image
      {...rest}
      src={error ? fallbackSrc : imgSrc}
      alt={alt}
      onError={() => {
        setImgSrc(fallbackSrc)
        setError(true)
      }}
    />
  )
}
