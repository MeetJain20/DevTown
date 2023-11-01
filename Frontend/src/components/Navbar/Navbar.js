import React from 'react';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import './Navbar.css';

const Navbar = () => {
    const searchValue = useSelector((state) => state.seachtext);
    const dispatch = useDispatch();
    let selectedCategory = ""
    const categoryList = [
        { value: "sortbyprice", label: "Sort By Price" },
        { value: "sortbycapacity", label: "Sort By Capacity" }
    ];
    const categoryHandler = (e) => {
        e.preventDefault();
        selectedCategory = e.target.getAttribute('value');
        dispatch({
            type: 'FILTER_TEXT',
            payload: selectedCategory
        })
    }
    return (
        <header className="navbar">
            <div className="fields">
                <div className="navhead">
                    DriveEasyRentals
                </div>
                <div className="rightsidenavbar">
                    <div className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Filter
                        </Link>
                        <ul className="dropdown-menu">
                            {categoryList.map((element) => {
                                return (<li className="dropdown-item"
                                    value={`${element.value}`} onClick={categoryHandler}>{element.label} </li>)
                            }
                            )}
                        </ul>
                    </div>
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
                </div>

                {/* <div className="searchbyrelevance">
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
                </div> */}
            </div>
        </header>
    );
};

export default Navbar;
