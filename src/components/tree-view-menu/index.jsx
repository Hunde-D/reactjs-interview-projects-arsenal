import MenuList from "./MenuList";
import "./styles.css";

// eslint-disable-next-line react/prop-types
export default function TreeViewMenu({ menus = [] }) {
  return (
    <ul className="menu-list-container">
      {menus.map((menu, index) => {
        return <MenuList key={index} childMenus={menu} />;
      })}
    </ul>
  );
}
