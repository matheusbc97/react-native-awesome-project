import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IStackParams} from '../../core/navigation/types';

export type INavigationProps<T extends keyof IStackParams> =
  NativeStackNavigationProp<IStackParams, T>;

export type IRouteProp<T extends keyof IStackParams> = RouteProp<
  IStackParams,
  T
>;

export interface IScreenProps<T extends keyof IStackParams> {
  navigation: INavigationProps<T>;
  route: IRouteProp<T>;
}
