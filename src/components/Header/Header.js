import React, { useContext } from 'react';
import {CategoryContext} from '../../App';
const Header = (props) => {
    const [category, setCategory] = useContext(CategoryContext);
    return (
        <div>
            <h2>This is Header</h2>
            <h4>Count : {category}</h4>
            <button onClick={() => setCategory('laptop')}>Laptop</button>
            <button onClick={() => setCategory('phone')}>Phone</button>
            <button onClick={() => setCategory('camera')}>Camera</button>
        </div>
    );
};

export default Header;