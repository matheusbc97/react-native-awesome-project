import {IProduct, PaginationResponse} from '../types';
import {PaginationParams} from '../types/paginationParams';
import api from './api';

interface GetProductListServiceResponse extends PaginationResponse {
  products: IProduct[];
}

export async function getProductListService(
  params: PaginationParams,
): Promise<GetProductListServiceResponse> {
  const response = await api.get('products', {
    params,
  });

  return response.data;
}
