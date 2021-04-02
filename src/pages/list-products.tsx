import { useState } from 'react';
import { Link } from 'react-router-dom';

const ListProduct = () => {
  const [product, setProduct] = useState(() => {
    const initialProductList = {
      data: [
        { id: 1, name: 'Tv Sony' },
        { id: 2, name: 'Tv Samsung', sale: 50 },
        { id: 3, name: 'Tv LG' },
      ],
    };
    return initialProductList;
  });

  const productList =
    product.data.length > 0 &&
    product.data.map((item) => {
      return (
        <li key={item.id}>
          <Link
            to={{
              pathname: `/product/${item.id}`,
              state: item,
              search: `${item.sale ? `?deal=${item.sale}` : ''}`,
            }}
            className="navLink"
          >
            {item.name}
          </Link>
        </li>
      );
    });

  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <p>List products</p>
      <ul style={{ listStyle: 'none' }}>{productList}</ul>
    </div>
  );
};

export default ListProduct;
