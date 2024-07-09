import React from 'react';
import Product from './product';

function ProductList({ products }) {
  return (
    <div className="md:grid grid-cols-3 gap-5 space-y-3">
      {products.map(item => (
        <Product {...item} key={item.id} />
      ))}
    </div>
  );
}

export default ProductList;
