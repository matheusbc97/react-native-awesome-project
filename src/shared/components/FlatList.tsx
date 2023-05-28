import {FlatList as RNFlatList, FlatListProps} from 'react-native';
import {ListEmptyComponent} from './ListEmptyComponent';

export interface IFlatListProps<T> extends FlatListProps<T> {
  keyExtractor: (item: T) => string;
  emptyListText: string;
}

export function FlatList<T>({
  contentContainerStyle,
  ListEmptyComponent: ListEmptyComponentProp,
  emptyListText,
  ...props
}: IFlatListProps<T>) {
  return (
    <RNFlatList
      contentContainerStyle={[{flexGrow: 1}, contentContainerStyle]}
      ListEmptyComponent={
        ListEmptyComponentProp ?? <ListEmptyComponent text={emptyListText} />
      }
      {...props}
    />
  );
}
