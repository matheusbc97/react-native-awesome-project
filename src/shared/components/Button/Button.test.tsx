import {render, fireEvent} from '@testing-library/react-native';
import {TEST_IDS} from '../../constants/testIds';

import {Button} from './index';

let mockUseGetEnhancedStylesReturn: jest.Mock;

jest.mock('../../hooks/useGetEnhancedStyles', () => {
  mockUseGetEnhancedStylesReturn = jest.fn();

  return {
    useGetEnhancedStyles: () => mockUseGetEnhancedStylesReturn,
  };
});

describe('Button', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    const {getByTestId} = render(<Button onPress={() => {}} />);

    expect(getByTestId(TEST_IDS.BUTTON)).toBeVisible();
  });

  it('should call onPress when pressed', () => {
    const onPress = jest.fn();
    const {getByTestId} = render(<Button onPress={onPress} />);

    fireEvent.press(getByTestId(TEST_IDS.BUTTON));

    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('should render children', () => {
    const textContent = 'hello';
    const {getByTestId} = render(
      <Button onPress={() => {}}>{textContent}</Button>,
    );

    expect(getByTestId(TEST_IDS.BUTTON)).toHaveTextContent(textContent);
  });

  it('should merge style prop', () => {
    const {getByTestId} = render(
      <Button onPress={() => {}} style={{backgroundColor: 'red'}} />,
    );

    expect(getByTestId(TEST_IDS.BUTTON)).toHaveStyle({backgroundColor: 'red'});
  });

  it('should call getStyle prop', () => {
    render(<Button onPress={() => {}} />);

    expect(mockUseGetEnhancedStylesReturn).toHaveBeenCalledTimes(1);
  });
});
