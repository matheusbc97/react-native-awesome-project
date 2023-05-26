import {PropsWithChildren} from 'react';
import {QueryErrorResetBoundary} from 'react-query';
import {ErrorBoundary} from 'react-error-boundary';

import {ErrorMessage} from './ErrorMessage';

export function AppErrorBoundary({children}: PropsWithChildren) {
  const fallbackRender = ({resetErrorBoundary}: any) => (
    <ErrorMessage onTryAgainPress={resetErrorBoundary} />
  );

  return (
    <QueryErrorResetBoundary>
      {({reset}) => (
        <ErrorBoundary onReset={reset} fallbackRender={fallbackRender}>
          {children}
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}
