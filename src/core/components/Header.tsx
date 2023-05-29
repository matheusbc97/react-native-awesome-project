import {View} from 'react-native';

import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {FontAwesome5, FontAwesome} from '@expo/vector-icons';

import {Row, Button} from '../../shared/components';
import {useSafeAreaInsets} from '../../shared/hooks';

export function Header({navigation, route, back}: NativeStackHeaderProps) {
  const {top} = useSafeAreaInsets();

  return (
    <Row style={[{paddingTop: top, height: 50 + top}]}>
      {back && (
        <Button
          onPress={() => navigation.pop()}
          padding="xs"
          marginHorizontal="m">
          <FontAwesome name="arrow-left" size={24} color="black" />
        </Button>
      )}

      <View style={{flex: 1}} />

      {route.name !== 'Cart' && (
        <Button
          onPress={() => navigation.navigate('Cart')}
          padding="xs"
          marginHorizontal="m">
          <FontAwesome5 name="shopping-cart" size={24} color="black" />
        </Button>
      )}
    </Row>
  );
}
