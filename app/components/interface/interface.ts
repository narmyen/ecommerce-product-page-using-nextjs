export interface Product {
  product_id: number;
  product_image: any[];
  product_owner: string;
  product_name: string
  product_description: string;
  product_price: number;
  product_sale_price?: number;
}

export interface ProductToCart {
  product: Product;
  amount: number;
}