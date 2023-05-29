import {PropsWithChildren} from 'react';
import {QueryClient, QueryClientProvider as RqProvider} from 'react-query';

const queryClient = new QueryClient();

export function QueryClientProvider({children}: PropsWithChildren) {
  return <RqProvider client={queryClient}>{children}</RqProvider>;
}
