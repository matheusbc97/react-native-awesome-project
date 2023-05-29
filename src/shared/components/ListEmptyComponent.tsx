import {Center} from './Center';
import {Text} from './Text';

export interface IListEmptyComponentProps {
  text: string;
  testID?: string;
}

export function ListEmptyComponent({text, testID}: IListEmptyComponentProps) {
  return (
    <Center testID={testID}>
      <Text>{text}</Text>
    </Center>
  );
}
