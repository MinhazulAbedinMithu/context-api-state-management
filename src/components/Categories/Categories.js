import React, { useContext, useEffect, useState } from 'react';
import CategoryDetail from '../CategoryDetail/CategoryDetail';
import {CategoryContext} from '../../App';
const allProducts = [
    {name: 'Lenovo', category: 'laptop'}, {name: 'Asus', category: 'laptop'}, {name: 'Dell', category: 'laptop'}, 
    {name: 'Sumsung', category: 'phone'}, {name: 'OnePlus', category: 'phone'}, {name: 'Apple', category: 'phone'}, 
    {name: 'Canon', category: 'camera'}, {name: 'Sony', category: 'camera'}, {name: 'Nikkon', category: 'camera'}, 
]

const Categories = () => {
    const [category] = useContext(CategoryContext);
    const [products, setProducts] = useState([]);
    useEffect( () => {
        const matchedProducts = allProducts.filter(product => product.category.toLowerCase() === category.toLowerCase());
        setProducts(matchedProducts);
    }, [category])
    return (
        <div>
            <h3>This is Categories</h3>
            {
                products.map(product => <CategoryDetail product={product}></CategoryDetail>)
            }
        </div>
    );
};

export default Categories;