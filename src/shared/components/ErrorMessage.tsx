import {Text, Button} from 'react-native';
import {FontAwesome5} from '@expo/vector-icons';

import {Column} from './Column';
import {spacing} from '../theme';

export interface IErrorMessageProps {
  onTryAgainPress: () => void;
}

export function ErrorMessage({onTryAgainPress}: IErrorMessageProps) {
  return (
    <Column padding="m">
      <Column paddingVertical="xs" style={{alignItems: 'center'}}>
        <FontAwesome5 name="frown" size={60} color="#9e9e9e" />
        <Text style={{marginTop: spacing.s}}>Ocorreu um erro inesperado!</Text>
      </Column>
      <Column paddingVertical="xs">
        <Button title="Tentar Novamente" onPress={onTryAgainPress} />
      </Column>
    </Column>
  );
}
