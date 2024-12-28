import cars from "../../cars";
import CarCard from "../../components/carCard/CarCard";
import "./CarListScreen.css";

const CarListScreen = () => {
  return (
    <div className="car-list">
      <div className="car-list__container">
        <h2 className="car-list__title">Popular Cars</h2>
        <div className="car-list__grid">
          {cars.map((car, index) => (
            <CarCard key={index} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarListScreen;
