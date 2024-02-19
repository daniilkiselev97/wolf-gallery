import React from 'react';
import { CommonClassProps, Photo } from '../types';
interface MainPhotoProps extends CommonClassProps {
    prevPhoto?: Photo;
    activePhoto: Photo;
    nextPhoto?: Photo;
}

export const MainPhoto: React.FC<MainPhotoProps> = ({
    prevPhoto,
    activePhoto,
    nextPhoto,
}) => <div>Main photo</div>;
