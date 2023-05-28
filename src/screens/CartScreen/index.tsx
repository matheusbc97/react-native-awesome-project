import {View, Text} from 'react-native';
import {IScreenProps} from '../../shared/types';

export function CartScreen({}: IScreenProps<'Cart'>) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>CartScreen</Text>
    </View>
  );
}
