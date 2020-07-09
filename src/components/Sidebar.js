import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getCategories } from '../redux/modules/category/categoryAction';

const Sidebar = ({clickLink}) => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.category.categories);

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    return (
        <div className="sidebar">
            <ul className="sidebar-list">
                <li className="sidebar-item">
                    <Link to="/" id="top" onClick={ e => clickLink(e) } className="sidebar-link">Top</Link>
                </li>
                <li className="sidebar-item">
                    <Link to="/news" id="news" onClick={ e => clickLink(e) } className="sidebar-link">News</Link>
                </li>
                {
                    categories.map((category) => (
                        <li className="sidebar-item" key={category}>
                            <Link to={`/category/${category}`} id={category} onClick={ e => clickLink(e) } className="sidebar-link">{category}</Link>
                        </li>
                    ))
                }
                <li className="sidebar-item">
                    <Link to="/about" id="about" onClick={ e => clickLink(e) } className="sidebar-link">About</Link>
                </li>
            </ul>
        </div>
    )
};

export default Sidebar;