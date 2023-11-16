export interface Product {
  _id: string;
  title: string;
  isNew: boolean;
  oldPrice: string;
  price: string;
  description: string;
  category: string;
  image: string;
  rating: number;
  quantity: number;
}

export interface ItemProps {
  item: Product;
}

export interface StateProps {
  shopping: {
    productData: [];
    userInfo: {};
    orderData: {
      order: Product[];
    };
  };
}
