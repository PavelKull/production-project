import { classNames } from 'shared/lib/classNames/classNames';
<<<<<<< HEAD
import { Loader } from 'shared/ui/Loader/Loader';
=======
import { Loader } from '../Loader/Loader';
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(cls.PageLoader, {}, [className])}>
        <Loader />
    </div>
);
