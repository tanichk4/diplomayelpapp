import classNames from "classnames";

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
        <img src={item.image} alt="image" />
      </div>
      <div>
        <p>{item.title}</p>
      </div>
    </div>
  );
};

export default AppRightItems;
