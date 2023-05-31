import {AppNavigator} from './navigation/AppNavigator';
import {GlobalStoreProvider, QueryClientProvider} from './providers';

function App() {
  return (
    <QueryClientProvider>
      <GlobalStoreProvider>
        <AppNavigator />
      </GlobalStoreProvider>
    </QueryClientProvider>
  );
}

export default App;
