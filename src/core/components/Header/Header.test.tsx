import {render, fireEvent} from '@testing-library/react-native';
import {Header} from './index';
import {EdgeInsets} from 'react-native-safe-area-context';
import {TEST_IDS} from '../../../shared/constants/testIds';

let mockUseGetCartProductsTotal: jest.Mock;

jest.mock('../../../shared/hooks/useGetCartProductsTotal.ts', () => {
  mockUseGetCartProductsTotal = jest.fn();

  return {
    useGetCartProductsTotal: mockUseGetCartProductsTotal,
  };
});

jest.mock('../../../shared/hooks/useSafeAreaInsets.ts', () => {
  return {
    useSafeAreaInsets: () =>
      ({
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
      } as EdgeInsets),
  };
});

const mockNavigation: any = {
  pop: jest.fn(),
  navigate: jest.fn(),
};

const mockRoute = {key: 'test', name: 'test'};

describe('Header', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should render an Header', () => {
    render(
      <Header
        navigation={mockNavigation}
        route={mockRoute}
        back={{title: 'fake-title'}}
        options={{}}
      />,
    );
  });

  it('should render the badge with the total of products', () => {
    const totalMock = 3;
    mockUseGetCartProductsTotal.mockReturnValueOnce(totalMock);

    const {getByTestId} = render(
      <Header navigation={mockNavigation} route={mockRoute} options={{}} />,
    );

    const badge = getByTestId('badge-text');

    expect(badge.children[0]).toBe(totalMock.toString());
  });

  it('should not render the badge when the total of products is 0', () => {
    mockUseGetCartProductsTotal.mockReturnValueOnce(0);

    const {queryByTestId} = render(
      <Header navigation={mockNavigation} route={mockRoute} options={{}} />,
    );

    const badge = queryByTestId('badge');

    expect(badge).toBeNull();
  });

  it('should not render the cart button when the route is Cart', () => {
    const {queryByTestId} = render(
      <Header
        navigation={mockNavigation}
        route={{...mockRoute, name: 'Cart'}}
        options={{}}
      />,
    );

    const cartButton = queryByTestId('header-cart-button');

    expect(cartButton).toBeNull();
  });

  it('should render the cart button when the route is not Cart', () => {
    const {queryByTestId} = render(
      <Header navigation={mockNavigation} route={mockRoute} options={{}} />,
    );

    const cartButton = queryByTestId(TEST_IDS.HEADER_CART_BUTTON);

    expect(cartButton).not.toBeNull();
  });

  it('should go to cart when cart button is pressed', () => {
    const {getByTestId} = render(
      <Header navigation={mockNavigation} route={mockRoute} options={{}} />,
    );

    fireEvent.press(getByTestId(TEST_IDS.HEADER_CART_BUTTON));

    expect(mockNavigation.navigate).toHaveBeenCalledWith('Cart');
  });

  it('should render the back button when the back prop is passed', () => {
    const {queryByTestId} = render(
      <Header
        navigation={mockNavigation}
        route={mockRoute}
        back={{title: 'fake-title'}}
        options={{}}
      />,
    );

    const backButton = queryByTestId(TEST_IDS.HEADER_BACK_BUTTON);

    expect(backButton).not.toBeNull();
  });

  it('should not render the back button when the back prop is not passed', () => {
    const {queryByTestId} = render(
      <Header navigation={mockNavigation} route={mockRoute} options={{}} />,
    );

    const backButton = queryByTestId('back-button');

    expect(backButton).toBeNull();
  });

  it('should go back when back button is pressed', () => {
    const {getByTestId} = render(
      <Header
        navigation={mockNavigation}
        route={mockRoute}
        back={{title: 'fake-title'}}
        options={{}}
      />,
    );

    fireEvent.press(getByTestId(TEST_IDS.HEADER_BACK_BUTTON));

    expect(mockNavigation.pop).toHaveBeenCalled();
  });
});
