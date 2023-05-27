import {getProductListService} from '../../../shared/services';
import {QUERY_KEYS} from '../../../shared/constants';
import {useInfinityScroll} from '../../../shared/hooks';

export function useGetProducts() {
  const {data, isFetching, fetchNextPage, isRefetching, refetch} =
    useInfinityScroll({
      queryKey: QUERY_KEYS.PRODUCTS,
      queryFn: getProductListService,
      dataSelector: item => item.products,
    });

  return {
    products: data,
    fetchNextPage,
    isFetching,
    isRefetching,
    refetch,
  };
}
