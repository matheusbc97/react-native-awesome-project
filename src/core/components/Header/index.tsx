import {View} from 'react-native';

import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {FontAwesome5, FontAwesome} from '@expo/vector-icons';

import {Row, Button, Badge} from '../../../shared/components';
import {
  useGetCartProductsTotal,
  useSafeAreaInsets,
} from '../../../shared/hooks';
import {TEST_IDS} from '../../../shared/constants/testIds';

export function Header({navigation, route, back}: NativeStackHeaderProps) {
  const {top} = useSafeAreaInsets();
  const totalOfProducts = useGetCartProductsTotal();

  return (
    <Row
      backgroundColor="surface"
      elevated
      style={[{paddingTop: top, height: 50 + top}]}>
      {back && (
        <Button
          testID={TEST_IDS.HEADER_BACK_BUTTON}
          onPress={() => navigation.pop()}
          padding="xs"
          marginHorizontal="m">
          <FontAwesome name="arrow-left" size={24} color="black" />
        </Button>
      )}

      <View style={{flex: 1}} />

      {route.name !== 'Cart' && (
        <View testID={TEST_IDS.BADGE_CONTAINER}>
          <Button
            testID={TEST_IDS.HEADER_CART_BUTTON}
            onPress={() => navigation.navigate('Cart')}
            padding="xs"
            marginHorizontal="m">
            <FontAwesome5 name="shopping-cart" size={24} color="black" />
            {totalOfProducts !== 0 && (
              <Badge
                count={totalOfProducts}
                style={{position: 'absolute', right: -4, top: -4}}
              />
            )}
          </Button>
        </View>
      )}
    </Row>
  );
}
