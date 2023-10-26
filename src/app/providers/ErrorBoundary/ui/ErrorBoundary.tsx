import React, { ErrorInfo, ReactNode, Suspense } from 'react';
<<<<<<< HEAD
import { ErrorPage } from 'widgets/ErrorPage/ui/ErrorPage';
=======
import { PageError } from 'widgets/PageError/ui/PageError';
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

<<<<<<< HEAD
class ErrorBoundary
    extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
=======
class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
<<<<<<< HEAD
        // Update state so the next render will show the fallback UI.
=======
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
<<<<<<< HEAD
        // You can also log the error to an error reporting service
=======
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984
        console.log(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;

        if (hasError) {
<<<<<<< HEAD
            // You can render any custom fallback UI
            return (
                <Suspense fallback="">
                    <ErrorPage />
=======
            return (
                <Suspense fallback="">
                    <PageError />
>>>>>>> 19dff3394723decf3e4c408c0514b24d70abd984
                </Suspense>
            );
        }

        return children;
    }
}

export default ErrorBoundary;
