import {ActivityIndicator, FlatList, FlatListProps} from 'react-native';
import {ListEmptyComponent} from './ListEmptyComponent';

export interface IInfinityScrollFlatListProps<T> extends FlatListProps<T> {
  keyExtractor: (item: T) => string;
  refreshing: boolean;
  onEndReached: () => void;
}

export function InfinityScrollFlatList<T>({
  contentContainerStyle,
  refreshing,
  ...props
}: IInfinityScrollFlatListProps<T>) {
  return (
    <FlatList
      contentContainerStyle={[{flexGrow: 1}, contentContainerStyle]}
      ListFooterComponent={refreshing ? <ActivityIndicator /> : null}
      ListEmptyComponent={
        <ListEmptyComponent text="Nenhum produto encontrado" />
      }
      refreshing={refreshing}
      {...props}
    />
  );
}
