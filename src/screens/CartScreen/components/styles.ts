import {StyleSheet} from 'react-native';

export const CART_ITEM_HEIGHT = 50;

const BORDER_RADIUS = 2;

export default StyleSheet.create({
  container: {borderRadius: BORDER_RADIUS, height: CART_ITEM_HEIGHT},
  imageContainer: {
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS,
    overflow: 'hidden',
  },
  image: {width: 50, height: CART_ITEM_HEIGHT},
});
