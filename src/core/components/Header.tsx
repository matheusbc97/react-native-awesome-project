import {StyleSheet} from 'react-native';

import {NativeStackHeaderProps} from '@react-navigation/native-stack';

import {FontAwesome5} from '@expo/vector-icons';

import {Row, Button} from '../../shared/components';
import {useSafeAreaInsets} from '../../shared/hooks';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
  },
});

export function Header({}: NativeStackHeaderProps) {
  const {top} = useSafeAreaInsets();

  return (
    <Row style={[{paddingTop: top, height: 50 + top}, styles.container]}>
      <Button onPress={() => {}} padding="xs" marginHorizontal="m">
        <FontAwesome5 name="shopping-cart" size={24} color="black" />
      </Button>
    </Row>
  );
}
