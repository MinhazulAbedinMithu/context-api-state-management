import React, { useContext } from 'react';
import Categories from '../Categories/Categories';
import {CategoryContext} from '../../App';


const Home = () => {
    const [category, setCategory] = useContext(CategoryContext);
    return (
        <div>
            <h2>This is Home</h2>
            <h4>Count : {category}</h4>
            <Categories></Categories>
        </div>
    );
};

export default Home;