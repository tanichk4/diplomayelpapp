import hungryImage from "../assets/hungry.svg";

const Welcome = () => {
  return <h2 className="app__right--title">
      Welcome To <br /> Lucknow
      <img src={hungryImage} alt="" className="app__right--image" />
    </h2>

};

export default Welcome;
