import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Navbar.css';

const Navbar = () => {
    const searchValue = useSelector((state) => state.seachtext)
    const dispatch = useDispatch();
    return (
        <header className="navbar">
            <div className="fields">
                <div className="searchbar">
                    <div className="inputfield">
                        <input type="text" placeholder='Search...' className="inputt" value={searchValue} onChange={(e) => {
                            const newsearchText = e.target.value;
                            dispatch({
                                type: 'SEARCH_TEXT',
                                payload: newsearchText
                            })
                        }} />
                    </div>
                    <div className="searchicon">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
                <div className="searchbyrelevance">
                    <div className="searchname">
                        Relevance
                    </div>
                    <div className="searcharrow">
                        <i className="fa-solid fa-angle-down"></i>
                    </div>
                </div>
                <div className="searchbybrand">
                    <div className="searchbrandname">
                        All Brands
                    </div>
                    <div className="searchbrandarrow">
                        <i className="fa-solid fa-angle-down"></i>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
