import { useContext } from "react";
import AppRightContent from "./AppRightContent";

import  useActiveItem  from "./Menu";

const AppRight = () => {
  const activeItem = useContext(useActiveItem);
  console.log(activeItem)
  return (
    <div className="app__right">
      <AppRightContent />
    </div>
  );
};

export default AppRight;
