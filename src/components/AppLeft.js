import Profile from "./Profile";
import Menu from "./Menu";
import Delivery from "./Delivery";

const AppLeft = () => {
  return (
    <div className="app__left">
      <Profile />
      <Menu/>
      <Delivery />
    </div>
  );
};

export default AppLeft;
