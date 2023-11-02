import React, { useState, useEffect } from 'react'
import './Dashboard.css';
import { useSelector } from 'react-redux';
import CarDetails from '../CarDetails/CarDetails';
import { Link, useParams } from 'react-router-dom';

const Dashboard = () => {
    const pageSize = 6;
    const carsData = useSelector((state) => state.cars);
    const searchvalue = useSelector((state) => state.searchtext);
    const filtervalue = useSelector((state) => state.filtertext);
    const { page } = useParams();
    const currentPage = parseInt(page, 10) || 1;

    const [currentPageData, setCurrentPageData] = useState([]);

    useEffect(() => {
        // Apply the filter to the entire carsData
        const filteredData = carsData.filter(car => {
            const formattedCarName = car.name.replace(/[\s-]/g, '').toLowerCase();
            const formattedSearchValue = searchvalue.replace(/[\s-]/g, '').toLowerCase();
            return formattedCarName.includes(formattedSearchValue);
        });

        if (filtervalue === 'sortbyprice') {
            filteredData.sort((a, b) => a.price - b.price);
        } else if (filtervalue === 'sortbycapacity') {
            // First, sort by price
            filteredData.sort((a, b) => a.price - b.price);

            // Then, sort by capacity
            filteredData.sort((a, b) => a.capacity - b.capacity);
        }
        // Calculate the start and end index for the current page
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;

        // Slice the sorted and filtered data based on the current page
        const slicedData = filteredData.slice(startIndex, endIndex);

        // Set the current page data
        setCurrentPageData(slicedData);
    }, [currentPage, carsData, searchvalue, filtervalue]);

    const getPageNumbers = Array.from({ length: Math.ceil(carsData.length / pageSize) }, (_, index) => index + 1);

    useEffect(() => {
        const cards = document.querySelectorAll('.col-md-4');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('active');
            }, index * 100); // Adjust the delay based on your preference
        });
    }, []);
    // const filteredCarData = Object.values(currentPageData).filter(car => {
    //     const formattedCarName = car.name.replace(/[\s-]/g, '').toLowerCase();
    //     const formattedSearchValue = searchvalue.replace(/[\s-]/g, '').toLowerCase();
    //     return formattedCarName.includes(formattedSearchValue);
    // });
    // if (filtervalue === 'sortbyprice') {
    //     filteredCarData.sort((a, b) => a.price - b.price);
    // } else if (filtervalue === 'sortbycapacity') {
    //     filteredCarData.sort((a, b) => a.capacity - b.capacity);
    // }

    return (
        <div className="contain">
            <div className="dashboard-container row">
                {currentPageData.map((car, index) => (
                    <div key={index} className={`col-md-4 ${index >= 0 ? 'first' : ''}`}>
                        <CarDetails
                            key={car.carid}
                            carid={car.carid}
                            name={car.name}
                            img={car.image}
                            year={car.year}
                            capacity={car.capacity}
                            fuel={car.fuel}
                            type={car.type}
                            distance={car.distance}
                            price={car.price}
                            isLike={car.isLike}
                        />
                    </div>
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
                            <button className="pagebtn" disabled={currentPage < getPageNumbers.length ? false : true}><i className="fa-solid fa-arrow-right"></i></button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Dashboard