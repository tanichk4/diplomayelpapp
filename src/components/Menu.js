// import { useState } from "react";
// import Icon from "./Icon";

// const menuList = [
//   { id: 1, title: "Home", svgName: "home" },
//   { id: 2, title: "Menu", svgName: "menu" },
//   { id: 3, title: "Trending", svgName: "trending" },
//   { id: 4, title: "Settings", svgName: "setting" },
// ];

// const Menu = () => {
//   const [activeItem, setActiveItem] = useState(menuList[0]);

//   const changeActiveItem = (item) => {
//     setActiveItem(item);
//   };

//   return (
//     <nav className="menu">
//       <ul className="menu__list">
//         {menuList.map((item) => {
//           const isActive = activeItem.id === item.id;
//           const menuIconClasses = isActive
//             ? "menu__icon menu__icon--active"
//             : "menu__icon";
//           const menuItemClasses = isActive
//             ? "menu__item menu__item--active"
//             : "menu__item";

//           return (
//             <li
//               className={menuItemClasses}
//               key={item.id}
//               onClick={() => changeActiveItem(item)}
//             >
//               <div className={menuIconClasses}>
//                 <Icon name={item.svgName} />
//               </div>
//               <span className="menu__title">{item.title}</span>
//             </li>
//           );
//         })}
//       </ul>
//     </nav>
//   );
// };

// export default Menu;
import { useState, createContext, useContext } from "react";
import Icon from "./Icon";

const menuList = [
  { id: 1, title: "Home", svgName: "home" },
  { id: 2, title: "Menu", svgName: "menu" },
  { id: 3, title: "Trending", svgName: "trending" },
  { id: 4, title: "Settings", svgName: "setting" },
];

// Создаем контекст
const ActiveItemContext = createContext();

const Menu = () => {
  // Используем хук useState для хранения состояния activeItem
  const [activeItem, setActiveItem] = useState(menuList[0]);

  const changeActiveItem = (item) => {
    setActiveItem(item);
  };

  return (
    // Оборачиваем компонент в провайдер контекста и передаем значение activeItem
    <ActiveItemContext.Provider value={activeItem}>
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
    </ActiveItemContext.Provider>
  );
};

export default Menu;

// Вспомогательная функция, которая позволяет получить значение activeItem из контекста
export const useActiveItem = () => useContext(ActiveItemContext);
