import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Bad from './Bad';
export default function App() {
  return (
        <>
            <ErrorBoundary>
              <Bad />
            </ErrorBoundary>
        </>
  );
}
