import {render} from '@testing-library/react-native';
import {ProductList} from './index';
import {TEST_IDS} from '../../../../shared/constants/testIds';
import {TEXTS} from '../../../../shared/constants/texts';
import {mockedProducts} from '../../../../shared/mocks/products';

let mockTest: jest.Mock;

jest.mock('../../hooks/useGetProducts', () => {
  mockTest = jest.fn(() => ({
    products: [],
    fetchNextPage: jest.fn(),
    refetch: jest.fn(),
    isRefetching: false,
  }));

  return {
    useGetProducts: mockTest,
  };
});

jest.mock('../ProductListItem/index');

describe('ProductList', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should show the product list', () => {
    const {getByTestId} = render(<ProductList />);
    const productList = getByTestId(TEST_IDS.INFINITY_SCROLL_FLAT_LIST);

    expect(productList).toBeVisible();
  });

  it('should render the empty list message', () => {
    const {getByText} = render(<ProductList />);

    expect(getByText(TEXTS.NO_PRODUCTS_FOUND)).toBeTruthy();
  });

  it('should have the correct data prop', () => {
    mockTest.mockReturnValue({
      products: mockedProducts,
      fetchNextPage: jest.fn(),
      refetch: jest.fn(),
      isRefetching: false,
    });

    const {getByTestId} = render(<ProductList />);

    const list = getByTestId(TEST_IDS.INFINITY_SCROLL_FLAT_LIST);

    expect(list.props.data).toBe(mockedProducts);
  });
});
