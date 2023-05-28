import {ViewStyle} from 'react-native/types';
import {spacing} from '../theme';
import {IEnhancedStyleProps} from '../types/IEnhancedStyleProps';

export function useGetEnhancedStyles() {
  const getEnhancedViewStyle = ({
    padding,
    margin,
    marginVertical,
    marginHorizontal,
    paddingHorizontal,
    paddingVertical,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    flex,
  }: IEnhancedStyleProps) => {
    const customStyle: ViewStyle = {};

    if (padding) {
      customStyle.padding = spacing[padding];
    }

    if (margin) {
      customStyle.margin = spacing[margin];
    }

    if (marginVertical) {
      customStyle.marginVertical = spacing[marginVertical];
    }

    if (marginHorizontal) {
      customStyle.marginHorizontal = spacing[marginHorizontal];
    }

    if (paddingHorizontal) {
      customStyle.paddingHorizontal = spacing[paddingHorizontal];
    }

    if (paddingVertical) {
      customStyle.paddingVertical = spacing[paddingVertical];
    }

    if (marginTop) {
      customStyle.marginTop = spacing[marginTop];
    }

    if (marginBottom) {
      customStyle.marginBottom = spacing[marginBottom];
    }

    if (marginLeft) {
      customStyle.marginLeft = spacing[marginLeft];
    }

    if (marginRight) {
      customStyle.marginRight = spacing[marginRight];
    }

    if (paddingTop) {
      customStyle.paddingTop = spacing[paddingTop];
    }

    if (paddingBottom) {
      customStyle.paddingBottom = spacing[paddingBottom];
    }

    if (paddingLeft) {
      customStyle.paddingLeft = spacing[paddingLeft];
    }

    if (paddingRight) {
      customStyle.paddingRight = spacing[paddingRight];
    }

    if (flex) {
      customStyle.flex = flex;
    }

    return customStyle;
  };

  return getEnhancedViewStyle;
}
