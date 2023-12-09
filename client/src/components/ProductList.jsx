import { Pagination } from '@mui/material';
import React from 'react';
import ProductCard from './ProductCard';
import { useState ,useEffect} from 'react';
import {  useParams } from 'react-router-dom'
import {getAllProductByCategoryId} from '../api/products'
// import { Macbook } from '../constants';

const ProductList = (props) => {
    const { id } = useParams();
    const [page, setPage] = useState(1);
    const [products, setProducts]= useState([])

    function onChangePage(page) {
        setPage(+page)
        console.log((page) * 8)
    }

    useEffect(()=>{
        console.log('id', id)
        getAllProductByCategoryId(id).then(({data})=>{

            console.log('data', data)
            setProducts(data)
        }).catch((e)=> console.log('e', e))

    },[id])
    return (
        <div className="p-4 py-8">

            <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 px-4'>
                {products.slice((page - 1) * 8, ((page) * 8)).map((product) => (

                    < ProductCard
                        key={product.title}
                        product={product}

                    />
                ))}
            </div>

            <div className='flex justify-center items-center w-full mt-4'>
                <Pagination page={page} count={Math.ceil(products.length / 8)} shape="rounded" onChange={(e, value) => {
                    console.log(value)
                    onChangePage(value)
                }} />
            </div>

        </div>



    );
}

export default ProductList