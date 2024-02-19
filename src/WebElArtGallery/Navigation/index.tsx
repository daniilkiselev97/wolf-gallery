import { CommonClassProps, Photo } from '../types';

interface NavigationProps extends CommonClassProps {
    disabledPrev: boolean;
    disabledNex: boolean;
    onPrevClick(): void;
    onNextClick(): void;
}

export const Navigation: React.FC<NavigationProps> = ({
    className,
    disabledPrev,
    disabledNex,
    onPrevClick,
    onNextClick,
}) => <div>Navigation</div>;
