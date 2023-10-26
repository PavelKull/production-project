import { lazy } from 'react';

<<<<<<< HEAD
export const MainPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
    setTimeout(() => resolve(import('./MainPage')), 1500);
}));
=======
export const MainPageAsync = lazy(() => import('./MainPage'));
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984
