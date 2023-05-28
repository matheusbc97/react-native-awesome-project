import {ActivityIndicator} from 'react-native';
import {FlatList, IFlatListProps} from './FlatList';

export interface IInfinityScrollFlatListProps<T> extends IFlatListProps<T> {
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
      refreshing={refreshing}
      {...props}
    />
  );
}
