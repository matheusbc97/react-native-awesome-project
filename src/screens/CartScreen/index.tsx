import {Text} from 'react-native';

import {IScreenProps} from '../../shared/types';
import {Column, FlatList} from '../../shared/components';
import {useGetCartProducts} from '../../shared/hooks';

export function CartScreen({}: IScreenProps<'Cart'>) {
  const cartProducts = useGetCartProducts();

  return (
    <Column flex={1}>
      <FlatList
        data={cartProducts}
        emptyListText="Carrinho Vazio"
        keyExtractor={product => product.id.toString()}
        renderItem={({item}) => <Text>{item.title}</Text>}
      />
    </Column>
  );
}
