import Icon from "./Icon";

const Menu = ({ activeItem, setActiveItem, menuList }) => {
  const changeActiveItem = (item) => {
    setActiveItem(item);
  };

  return (
    <nav className="menu">
      <ul className="menu__list">
        {menuList.map((item) => {
          const isActive = activeItem.id === item.id;
          const menuIconClasses = isActive
            ? "menu__icon menu__icon--active"
            : "menu__icon";
          const menuItemClasses = isActive
            ? "menu__item menu__item--active"
            : "menu__item";

          return (
            <li
              className={menuItemClasses}
              key={item.id}
              onClick={() => changeActiveItem(item)}
            >
              <div className={menuIconClasses}>
                <Icon name={item.svgName} />
              </div>
              <span className="menu__title">{item.title}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
