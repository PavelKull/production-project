import { lazy } from 'react';

<<<<<<< HEAD
export const AboutPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
    setTimeout(() => resolve(import('./AboutPage')), 1500);
}));
=======
export const AboutPageAsync = lazy(() => import('./AboutPage'));
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984
