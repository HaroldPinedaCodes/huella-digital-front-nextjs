export interface StrapiResponse<T> {
  data: {
    id: number;
    attributes: T & {
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  }[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiSingleResponse<T> {
  data: {
    id: number;
    attributes: T;
  };
}
