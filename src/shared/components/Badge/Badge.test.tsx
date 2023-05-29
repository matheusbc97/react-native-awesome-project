import {render} from '@testing-library/react-native';
import {TEST_IDS} from '../../constants/testIds';

import {Badge} from './index';

describe('Badge Component', () => {
  it('should render the badge', () => {
    const {getByTestId} = render(<Badge testID={TEST_IDS.BADGE} count={1} />);
    const badge = getByTestId(TEST_IDS.BADGE);

    expect(badge).toBeVisible();
  });

  it('should be visible', () => {
    const {getByTestId} = render(<Badge testID={TEST_IDS.BADGE} count={1} />);
    const badge = getByTestId(TEST_IDS.BADGE);

    expect(badge).toBeVisible();
  });

  it('should render badge with 0 count', () => {
    const {getByTestId} = render(<Badge testID={TEST_IDS.BADGE} count={0} />);
    const badgeText = getByTestId(TEST_IDS.BADGE_TEXT);

    expect(badgeText.children[0]).toBe('0');
  });

  it('should render badge with 99+ count', () => {
    const {getByTestId} = render(<Badge testID={TEST_IDS.BADGE} count={100} />);

    const badgeText = getByTestId(TEST_IDS.BADGE_TEXT);

    expect(badgeText.children[0]).toBe('99+');
  });
});
