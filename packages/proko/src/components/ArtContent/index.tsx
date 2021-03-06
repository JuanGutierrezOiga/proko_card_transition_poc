import React, { useState } from 'react';
import { Image } from 'antd';
import { MetadataCategory } from '@oyster/common';
import { MeshViewer } from '../MeshViewer';
import { ThreeDots } from '../MyLoader';
import { useCachedImage } from '../../hooks';

export const ArtContent = ({
  uri,
  extension,
  category,
  className,
  preview
 }: {
    category?: MetadataCategory,
    extension?: string,
    uri?: string,
    className?: string,
    preview?: boolean,
  }) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const src = useCachedImage(uri || '');

  if(extension?.endsWith('.glb')) {
    return <MeshViewer url={uri} className={className} />;
  }

  return category === 'video' ?
    <video src={src}
           className={className}
           playsInline={true}
           autoPlay={true}
           controlsList="nodownload"
           loop={true} /> :
    <Image
      src={src}
      preview={preview}
      wrapperClassName={className}
      loading="lazy"
      onLoad={e => {
          setLoaded(true);
      }}
      placeholder={
        <ThreeDots />
      }
      {...(loaded ? {} : {height: 200})}
    />;
}
