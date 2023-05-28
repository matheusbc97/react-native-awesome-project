import {IColor} from './color';
import {ISpacing} from './spacing';

export interface IEnhancedStyleProps {
  padding?: ISpacing;
  margin?: ISpacing;
  marginVertical?: ISpacing;
  marginHorizontal?: ISpacing;
  paddingHorizontal?: ISpacing;
  paddingVertical?: ISpacing;
  marginTop?: ISpacing;
  marginBottom?: ISpacing;
  marginLeft?: ISpacing;
  marginRight?: ISpacing;
  paddingTop?: ISpacing;
  paddingBottom?: ISpacing;
  paddingLeft?: ISpacing;
  paddingRight?: ISpacing;
  flex?: number;
  elevated?: boolean;
  backgroundColor?: IColor;
}
