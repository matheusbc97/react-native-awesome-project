import { Button, Center } from '../../../src/shared/components';

const ButtonMeta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onPress: { action: 'pressed the button' },
  },
  args: {},
  decorators: [
    (Story) => (
      <Center>
        <Story />
      </Center>
    ),
  ],
};

export default ButtonMeta;

export const Basic = {
  style: {
    backgroundColor: 'red',
    width: 200,
    height: 50,
  }
};