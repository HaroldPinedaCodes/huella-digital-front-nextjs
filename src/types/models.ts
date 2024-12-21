export interface Product {
  id: number;
  documentId: string;
  name: string;
  slug: string;
  description: Array<{
    type: string;
    children: Array<{
      text: string;
      type: string;
    }>;
  }>;
  priceClient: number;
  priceVet: number;
  stock: number;
  features: JSON;
  rating: number;
  statusProduct: "active" | "out_of_stock";
  brand: string;
  weight: number;
  images: Array<{
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      large: ImageFormat;
      small: ImageFormat;
      medium: ImageFormat;
      thumbnail: ImageFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  }>;
  categories: Category[];
  animals: Animal[];
  reviews: Review[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Review {
  id: number;
  documentId: string;
  name: string;
  email: string;
  rating: number;
  comment: string;
  product: number;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  image?: StrapiImage;
  parent?: Category;
}

export interface Animal {
  name: string;
  slug: string;
  image?: StrapiImage;
}

export interface StrapiImage {
  url: string;
  alternativeText?: string;
  width: number;
  height: number;
}
