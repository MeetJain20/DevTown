import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./CarDetails.css";

const CarDetails = (props) => {
    const { name, carid, img, year, capacity, fuel, distance, type, price, isLike } = props;
    // const [flag, setFlag] = useState(1);
    const flag = useSelector((state) => state.flag);
    const dispatch = useDispatch();

    const likeHandler = () => {
        if (flag) {
            dispatch({
                type: 'INCREMENT_LIKE',
                payload: {
                    carid: carid,
                },
            });

        }
        else {
            dispatch({
                type: 'DECREMENT_LIKE',
                payload: {
                    carid: carid,
                },
            });
        }
        dispatch({
            type: 'TOGGLE_FLAG'
        });
    }
    return (
        <div className="carcards">
            <div className="carimg">
                <img src={img} alt="Loading Car" className="carimage" />
            </div>
            <div className="nameandyear">
                <div className="carnamee">
                    {name}
                </div>
                <div className="caryearr">
                    {year}
                </div>
            </div>
            <div className="cardetailsss">
                <div className="capacityandfuel">
                    <div className="carcapacity">
                        <div className="capacityicon">
                            <i className="fa-solid fa-user-group"></i>
                        </div>
                        <div className="capacityname">

                            {capacity} people
                        </div>
                    </div>
                    <div className="carfuel">
                        <div className="fuelicon">
                            <i className="fa-solid fa-gas-pump"></i>
                        </div>
                        <div className="fuelname">

                            {fuel}
                        </div>
                    </div>
                </div>
                <div className="distanceandtype">
                    <div className="cardistance">
                        <div className="distanceicon">
                            <i className="fa-solid fa-gauge"></i>
                        </div>
                        <div className="distancename">
                            {distance} km/1-litre
                        </div>
                    </div>
                    <div className="cartype">
                        <div className="typeicon">
                            <i className="fa-solid fa-gear"></i>
                        </div>
                        <div className="typename">
                            {type}
                        </div>
                    </div>
                </div>
            </div>
            <div className="footercar">
                <div className="leftfooter">
                    ${price} <span className="month">/ week</span>
                </div>
                <div className="rightfooter">
                    <div className="carlike" onClick={likeHandler}>
                        <i className="fa-regular fa-heart" style={{ color: isLike ? "#5298ed" : "black" }}></i>
                    </div>
                    <div className="carrent">
                        <button className="carrentbtn">
                            Rent Now
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CarDetails
