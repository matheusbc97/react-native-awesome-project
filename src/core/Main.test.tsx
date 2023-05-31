import Main from './Main';

import renderer from 'react-test-renderer';

describe('<Main />', () => {
  it('renders correctly', () => {
    renderer.create(<Main />);
  });
});
