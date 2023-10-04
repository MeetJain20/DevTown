import React, { useState, useEffect } from 'react'
import './Dashboard.css';
import { useSelector } from 'react-redux';
import CarDetails from '../CarDetails/CarDetails';
import { Link, useParams } from 'react-router-dom';

const Dashboard = () => {
    const pageSize = 6;
    const carsData = useSelector((state) => state.cars);
    const searchvalue = useSelector((state) => state.searchtext);
    const { page } = useParams();
    const currentPage = parseInt(page, 10) || 1;

    const [currentPageData, setCurrentPageData] = useState([]);

    useEffect(() => {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const slicedData = carsData.slice(startIndex, endIndex);
        setCurrentPageData(slicedData);
    }, [currentPage, carsData]);

    const getPageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const filteredCarData = Object.values(currentPageData).filter(car => {
        const formattedCarName = car.name.replace(/[\s-]/g, '').toLowerCase();
        const formattedSearchValue = searchvalue.replace(/[\s-]/g, '').toLowerCase();
        return formattedCarName.includes(formattedSearchValue);
    });

    return (
        <div className="dashboard-container">
            {filteredCarData.map((car) => (
                <CarDetails key={car.carid} carid={car.carid} name={car.name} img={car.image} year={car.year} capacity={car.capacity} fuel={car.fuel} type={car.type} distance={car.distance} price={car.price} isLike={car.isLike} />
            ))}

            <div className="pagination">
                <div className="leftpage">
                    {currentPage * pageSize < carsData.length ? currentPage * pageSize : carsData.length} from {carsData.length}
                </div>
                <div className="rightpage">
                    <Link to={`/page/${currentPage - 1}`}>
                        <button className="pagebtn" disabled={currentPage > 1 ? false : true}><i className="fa-solid fa-arrow-left"></i></button>
                    </Link>
                    {getPageNumbers.map((pageNumber) => (
                        <Link key={pageNumber} to={`/page/${pageNumber}`}>
                            <button className="pagebtn">{pageNumber}</button>
                        </Link>
                    ))}
                    <Link to={`/page/${currentPage + 1}`}>
                        <button className="pagebtn" disabled={currentPage < 10 ? false : true}><i className="fa-solid fa-arrow-right"></i></button>
                    </Link>
                </div>

            </div>

        </div>

    )
}

export default Dashboard