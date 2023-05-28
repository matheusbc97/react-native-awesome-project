import {View, Text} from 'react-native';
import {IProduct, IScreenProps} from '../../shared/types';
import {FlatList} from '../../shared/components';

export function CartScreen({}: IScreenProps<'Cart'>) {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={[] as IProduct[]}
        emptyListText="Carrinho Vazio"
        keyExtractor={product => product.id.toString()}
        renderItem={({item}) => <Text>{item.title}</Text>}
      />
    </View>
  );
}
