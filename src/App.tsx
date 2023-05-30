//export {default} from '../.storybook';

import {AppNavigator} from './core/navigation/AppNavigator';
import {GlobalStoreProvider, QueryClientProvider} from './core/providers';

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
