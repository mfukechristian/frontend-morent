import { FaHeart, FaGasPump, FaUsers } from "react-icons/fa";
import { TbManualGearboxFilled } from "react-icons/tb";
import "./CarCard.css";

const CarCard = ({ car }) => {
  const { name, type, fuel, transmission, seats, pricePerDay, image } = car;

  return (
    <div className="car-card">
      <div className="car-card__header">
        <div className="car-card__title">
          <h3>{name}</h3>
          <span>{type}</span>
        </div>
        <button className="car-card__favorite">
          <FaHeart />
        </button>
      </div>

      <div className="car-card__image">
        <img src={image} alt={name} />
      </div>

      <div className="car-card__specs">
        <div className="car-card__spec">
          <FaGasPump />
          <span>{fuel}</span>
        </div>
        <div className="car-card__spec">
          <TbManualGearboxFilled />
          <span>{transmission}</span>
        </div>
        <div className="car-card__spec">
          <FaUsers />
          <span>{seats} People</span>
        </div>
      </div>

      <div className="car-card__footer">
        <div className="car-card__price">
          <h4>
            ${pricePerDay}.00<span>/day</span>
          </h4>
        </div>
        <button className="car-card__rent-button">Rent Now</button>
      </div>
    </div>
  );
};

export default CarCard;
