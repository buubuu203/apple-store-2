import React from 'react'
import ProductList from '../components/ProductList';
import MacbookPromotion from '../components/MacbookPromotion';
import IpadPromotion from '../components/IpadPromotion';
import {useParams} from 'react-router-dom';
import IphonePromotion from './../components/IphonePromotion';
import WatchPromotion from './../components/WatchPromotion';
import AirpodsPromotion from './../components/AirpodsPromotion';

const Products = () => {

  const { id } = useParams();

  return (
    <div className="bg-white">
      {id ==='1' &&    <MacbookPromotion/> }
      {id ==='2' &&    <IpadPromotion/> }
      {id ==='3' &&    <IphonePromotion/> }
      {id ==='4' &&    <WatchPromotion/> }
      {id ==='5' &&    <AirpodsPromotion/> }
    
        <ProductList/>
    </div>
  )
}

export default Products