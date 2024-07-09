import React, { useState, useEffect } from 'react';
import ProductList from './productList';
import NoMatch from './noMatch';
import {getProductList} from './api';
import Loading from './loading';

function ProductListPage() {

  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const xyz=getProductList();
    
    xyz.then(function(products){
      setProductList(products);
      setLoading(false)
    });
  }, [])
  
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('default');

  let data=productList.filter(function(item){
    const lowerCaseTitle=item.title.toLowerCase();
    const lowerCaseQuery=query.toLowerCase();

    return lowerCaseTitle.indexOf(lowerCaseQuery) != -1;
  })

  if(sort == "price"){
    data.sort(function(x,y){
      return x.price - y.price;
    });
  }else if(sort =="name"){
    data.sort(function(x,y){
      return x.title < y.title ? -1:1;
    })
  }

  function handleQueryChange(event){
    setQuery(event.target.value);
  }

  function handleSortChange(event){
    setSort(event.target.value);
  }

  if(loading){
    return <Loading />
  }

  return (
    <div className="p-2 max-w-6xl mx-auto bg-white px-9 py-12 my-5  ">
      <input
        value={query}
        placeholder="Search"
        className="border border-gray-700 rounded-md mb-2 px-2 py-1"
        onChange={handleQueryChange}
      />
      <select
        onChange={handleSortChange}
        className="border border-gray-700 rounded-md ml-2"
        value={sort}
      >
        <option value="default">Default Sort</option>
        <option value="name">Sort by Name</option>
        <option value="price">Sort by Price</option>
      </select>
     {data.length>0 && <ProductList products={data} />}
      {data.length===0 && <NoMatch>No Product Found</NoMatch>}
    </div>
  );
}

export default ProductListPage;
