import React from 'react';
import { CommonClassProps, Photo } from '../types';

interface PreviewGalleryProps extends CommonClassProps {
    activePhotoIndex: number;
    photos: Photo[];
}
export const PreviewGallery: React.FC<PreviewGalleryProps> = ({
    activePhotoIndex,
    photos,
    className,
}) => <div>PreviewPhoto</div>;
