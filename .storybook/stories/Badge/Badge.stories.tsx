import { Meta } from '@storybook/react-native';
import { Badge, Center } from '../../../src/shared/components';

const BadgeMeta: Meta<typeof Badge> = {
  title: 'Badge',
  component: Badge,
  args: {},
  decorators: [
    (Story) => (
      <Center>
        <Story />
      </Center>
    ),
  ],
};

export default BadgeMeta;

export const Basic = {
  args: {
    count: 5,
  },
};