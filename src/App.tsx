import {QueryClient, QueryClientProvider} from 'react-query';
import {AppNavigator} from './core/navigation/AppNavigator';
import {store} from './core/store';
import {Provider} from 'react-redux';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
