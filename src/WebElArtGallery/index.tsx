import React, { useState } from 'react';
import { Photo } from './types';
import style from './index.module.scss';
import { MainPhoto } from './MainPhoto';
import { Navigation } from './Navigation';
import { PreviewGallery } from './PreviewGallery';

interface WebElArtGallery {
    photos: Photo[];
}

export const WebElArtGallery: React.FC<WebElArtGallery> = ({ photos }) => {
    const [indexActivePhoto, setIndexActivePhoto] = useState(0);
    const activePhoto = photos[indexActivePhoto];
    const prevPhoto = photos[indexActivePhoto - 1];
    const nextPhoto = photos[indexActivePhoto + 1];
    if (!photos.length) {
        return null;
    }
    return (
        <div className={style.webelartGallery}>
            <div className={style.webelartGalleryContainer}>
                <MainPhoto
                    prevPhoto={prevPhoto}
                    activePhoto={activePhoto}
                    nextPhoto={nextPhoto}
                    className={style.webelartMainPhoto}
                />
                <Navigation
                    className={style.webelartNavigation}
                    disabledPrev={!prevPhoto}
                    disabledNex={!nextPhoto}
                    onPrevClick={() => {
                        setIndexActivePhoto(indexActivePhoto - 1);
                    }}
                    onNextClick={() => {
                        setIndexActivePhoto(indexActivePhoto + 11);
                    }}
                />
            </div>
            <PreviewGallery
                activePhotoIndex={indexActivePhoto}
                photos={photos}
                className={style.webelartPreviewList}
            />
        </div>
    );
};
