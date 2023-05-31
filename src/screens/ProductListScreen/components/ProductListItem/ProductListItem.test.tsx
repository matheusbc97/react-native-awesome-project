import {render, fireEvent} from '@testing-library/react-native';
import {ProductListItem} from '.';

import {mockedProducts} from '../../../../shared/mocks/products';
import {TEST_IDS} from '../../../../shared/constants/testIds';

let mockAddProductToCart: jest.Mock;
let mockRemoveProductFromCart: jest.Mock;
let mockIsProductInCart: jest.Mock;

jest.mock('../../../../shared/hooks/data/cart/useAddProductToCart', () => {
  mockAddProductToCart = jest.fn();

  return {
    useAddProductToCart: () => {
      return mockAddProductToCart;
    },
  };
});

jest.mock('../../../../shared/hooks/data/cart/useRemoveProductFromCart', () => {
  mockRemoveProductFromCart = jest.fn();

  return {
    useRemoveProductFromCart: () => {
      return mockRemoveProductFromCart;
    },
  };
});

jest.mock('../../../../shared/hooks/data/cart/useIfProductIsInCart', () => {
  mockIsProductInCart = jest.fn(() => false);

  return {
    useIfProductIsInCart: mockIsProductInCart,
  };
});

describe('ProductListItem', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should add product to cart when clicking on add button', () => {
    const mockProduct = mockedProducts[0];

    const {getByTestId} = render(<ProductListItem product={mockProduct} />);

    fireEvent.press(getByTestId(TEST_IDS.PRODUCT_LIST_ITEM_ADD_BUTTON));

    expect(mockAddProductToCart).toHaveBeenCalledWith(mockProduct);
  });

  it('should remove product from cart when clicking on remove button', () => {
    const mockProduct = mockedProducts[0];
    mockIsProductInCart.mockReturnValue(true);

    const {getByTestId} = render(<ProductListItem product={mockProduct} />);

    fireEvent.press(getByTestId(TEST_IDS.PRODUCT_LIST_ITEM_REMOVE_BUTTON));

    expect(mockRemoveProductFromCart).toHaveBeenCalledWith(mockProduct.id);
  });
});
