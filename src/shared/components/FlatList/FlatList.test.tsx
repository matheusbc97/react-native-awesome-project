import {render} from '@testing-library/react-native';
import {Text} from 'react-native';

import {FlatList} from './index';
import {TEST_IDS} from '../../constants/testIds';

describe('FlatList Component', () => {
  it('should render correctly', () => {
    const {getByTestId} = render(
      <FlatList
        keyExtractor={() => 'test'}
        emptyListText="There is no data"
        data={['test']}
        renderItem={({item}) => <Text>{item}</Text>}
      />,
    );

    const flatList = getByTestId(TEST_IDS.FLAT_LIST);

    expect(flatList).toBeVisible();
  });

  it('should render list items', () => {
    const dataItem = 'test';
    const {getByText} = render(
      <FlatList
        keyExtractor={() => 'test'}
        emptyListText="There is no data"
        data={[dataItem]}
        renderItem={({item}) => <Text>{item}</Text>}
      />,
    );

    expect(getByText(dataItem)).toBeVisible();
  });

  it('should render empty list component when there is no data', () => {
    const emptyListText = 'There is no data';

    const {getByText} = render(
      <FlatList
        keyExtractor={() => 'test'}
        emptyListText={emptyListText}
        data={[]}
        renderItem={({item}) => <Text>{item}</Text>}
      />,
    );

    expect(getByText(emptyListText)).toBeDefined();
  });

  it('should call keyExtractor', () => {
    const keyExtractor = jest.fn();

    render(
      <FlatList
        keyExtractor={keyExtractor}
        emptyListText="There is no data"
        data={['test']}
        renderItem={({item}) => <Text>{item}</Text>}
      />,
    );

    expect(keyExtractor).toHaveBeenCalledTimes(1);
  });
});
