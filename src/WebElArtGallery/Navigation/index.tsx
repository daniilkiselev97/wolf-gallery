import { CommonClassProps } from '../types';
import cl from 'classnames';
import style from './index.module.scss';

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
}) => (
    <div className={cl(style.navigation, className)}>
        <button
            disabled={disabledPrev}
            className={cl(style.navigationBtn, style.navigationBtnLeft)}
            onClick={onPrevClick}
        >
            Show previous photo
        </button>
        <button
            disabled={disabledNex}
            className={cl(style.navigationBtn, style.navigationBtnRight)}
            onClick={onNextClick}
        >
            Show next photo
        </button>
    </div>
);
