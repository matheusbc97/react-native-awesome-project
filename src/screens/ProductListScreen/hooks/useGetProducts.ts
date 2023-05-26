import {useQuery} from 'react-query';
import {getProductListService} from '../../../shared/services';
import {QUERY_KEYS} from '../../../shared/constants';

export function useGetProducts() {
  const {data} = useQuery(QUERY_KEYS.PRODUCTS, getProductListService, {
    suspense: true,
  });

  return {
    products: data?.products,
  };
}
