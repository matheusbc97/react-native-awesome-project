import {Center} from './Center';
import {Text} from './Text';

export interface IListEmptyComponentProps {
  text: string;
}

export function ListEmptyComponent({text}: IListEmptyComponentProps) {
  return (
    <Center>
      <Text>{text}</Text>
    </Center>
  );
}
