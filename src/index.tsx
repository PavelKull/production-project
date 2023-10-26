<<<<<<< HEAD
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import App from './app/App';

import './shared/config/i18n/i18n';
import { ErrorBoundary } from './app/providers/ErrorBoundary';
=======
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/providers/ErrorBoundary/index';
import { ThemeProvider } from 'app/providers/ThemeProvider';
import { render } from 'react-dom';

import App from './app/App';
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
<<<<<<< HEAD
    document.getElementById('root'),
=======
    document.getElementById('root')
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984
);
