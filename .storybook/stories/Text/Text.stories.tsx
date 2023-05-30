import { Meta } from '@storybook/react-native';
import { Text, Center, ITextProps } from '../../../src/shared/components';

const TextMeta: Meta<typeof Text> = {
  title: 'Text',
  component: Text,
  argTypes: {
    onPress: { action: 'pressed the Text' },
  },
  args: {
    children: 'Texto',
  },
  decorators: [
    (Story) => (
      <Center>
        <Story />
      </Center>
    ),
  ],

};

export default TextMeta;

export const Basic = {
  args: {
    style: {
 
    },
    padding: 'xs',
  } as ITextProps,
};