import {TouchableOpacity, View, Text} from 'react-native';

export interface IErrorMessageProps {
  onTryAgainPress: () => void;
}

export function ErrorMessage({onTryAgainPress}: IErrorMessageProps) {
  return (
    <View>
      <Text>There was an error!</Text>
      <TouchableOpacity onPress={onTryAgainPress}>
        <Text>Try again</Text>
      </TouchableOpacity>
    </View>
  );
}
