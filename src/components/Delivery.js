import deliveryImage from "../assets/delivery.svg";
import arrowImage from "../assets/arrow.svg";

const Delivery = () => {
  return (
    <div className="delivery__wrapper">
      <div className="delivery__container">
        <img className="delivery__image" src={deliveryImage} alt="delivery" />
        <h2 className="delivery__title">
          Faster <br /> delivery!
        </h2>
        <div className="delivery__info">
          <p className="delivery__text">Know more</p>
          <img className="arrow" src={arrowImage} />
        </div>
      </div>
    </div>
  );
};

export default Delivery;
