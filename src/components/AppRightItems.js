import classNames from "classnames";
import { memo } from "react";

const AppRightItems = ({ item, index, onClick, selectedType }) => {
  const handleItemClick = () => {
    onClick(item.type);
  };

  const itemsClassName = classNames("items__filter--item", {
    "items__filter--item--active": item.type === selectedType,
  });

  return (
    <div key={index} className={itemsClassName} onClick={handleItemClick}>
      <div>
        <img src={item.image} alt={item.title} />
      </div>
      <div>
        <p>{item.title}</p>
      </div>
    </div>
  );
};

export default memo(AppRightItems);
