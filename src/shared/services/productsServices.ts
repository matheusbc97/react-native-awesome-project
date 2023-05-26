import {IProduct} from '../types';
import api from './api';

interface GetProductListServiceResponse {
  limit: number;
  products: IProduct[];
  skip: number;
  total: number;
}

export async function getProductListService(): Promise<GetProductListServiceResponse> {
  const response = await api.get('products');

  return response.data;
}
