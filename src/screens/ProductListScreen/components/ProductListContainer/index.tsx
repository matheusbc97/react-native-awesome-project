import {PropsWithChildren} from 'react';
import {AppErrorBoundary, LoadingSuspense} from '../../../../shared/components';

export function ProductListContainer({children}: PropsWithChildren) {
  return (
    <LoadingSuspense>
      <AppErrorBoundary>{children}</AppErrorBoundary>
    </LoadingSuspense>
  );
}
