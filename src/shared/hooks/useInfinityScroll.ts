import {useInfiniteQuery} from 'react-query';
import {PaginationParams, PaginationResponse} from '../types';

const limit = 30;

interface UseInfinityScrollParams<
  T extends PaginationParams,
  K extends PaginationResponse,
  L,
> {
  queryFn: (params: T) => Promise<K>;
  dataSelector: (data: K) => L;
  queryKey: string | (string | number)[];
}

export function useInfinityScroll<
  T extends PaginationParams,
  K extends PaginationResponse,
  L,
>({queryFn, dataSelector, queryKey}: UseInfinityScrollParams<T, K, L>) {
  const {
    data,
    isFetching,
    fetchNextPage: rqFetchNextPage,
    isRefetching,
    refetch,
  } = useInfiniteQuery({
    queryKey,
    queryFn: ({pageParam = 0}) =>
      queryFn({
        ...arguments[0]?.params,
        limit,
        skip: pageParam * limit,
      }),
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.page >= lastPage.total) {
        return;
      }
      return pages.length + 1;
    },
    suspense: true,
  });

  const fetchNextPage = () => {
    if (isFetching || isRefetching) {
      return;
    }
    rqFetchNextPage();
  };

  return {
    data: data?.pages?.map(dataSelector).flat() as L | undefined,
    fetchNextPage,
    isFetching,
    isRefetching,
    refetch,
  };
}
