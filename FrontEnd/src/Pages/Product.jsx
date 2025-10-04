import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
// import all_product from '../Components/Assets/all_product';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts.jsx/RelatedProducts';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const {productId}=useParams();
  const product=all_product.find((e)=>e.id=== Number(productId))
  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}></ProductDisplay>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
