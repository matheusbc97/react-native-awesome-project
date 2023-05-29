import {FlatList as RNFlatList, FlatListProps} from 'react-native';
import {ListEmptyComponent} from '../ListEmptyComponent';
import {TEST_IDS} from '../../constants/testIds';

export interface IFlatListProps<T> extends FlatListProps<T> {
  keyExtractor: (item: T) => string;
  emptyListText: string;
  testID?: string;
}

export function FlatList<T>({
  contentContainerStyle,
  ListEmptyComponent: ListEmptyComponentProp,
  emptyListText,
  testID = TEST_IDS.FLAT_LIST,
  ...props
}: IFlatListProps<T>) {
  return (
    <RNFlatList
      testID={testID}
      contentContainerStyle={[{flexGrow: 1}, contentContainerStyle]}
      ListEmptyComponent={
        ListEmptyComponentProp ?? <ListEmptyComponent text={emptyListText} />
      }
      {...props}
    />
  );
}
