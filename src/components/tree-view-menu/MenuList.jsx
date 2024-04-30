import PropTypes from "prop-types";
import { useState } from "react";
import TreeViewMenu from "./index";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function MenuList({ childMenus }) {
  const [displayChildren, setDisplayChildren] = useState({});

  function toggleChildren(currLabel) {
    setDisplayChildren((prev) => ({ ...prev, [currLabel]: !prev[currLabel] }));
  }

  return (
    <li>
      <div className="menu-item">
        <p>{childMenus.label}</p>
        {childMenus.children ? (
          <span onClick={() => toggleChildren(childMenus.label)}>
            {displayChildren[childMenus.label] ? (
              <FaMinus color="#fff" size={25} />
            ) : (
              <FaPlus color="#fff" size={25} />
            )}
          </span>
        ) : null}
      </div>
      {childMenus.children && displayChildren[childMenus.label] && (
        <TreeViewMenu menus={childMenus.children} />
      )}
    </li>
  );
}

MenuList.propTypes = {
  childMenus: PropTypes.shape({
    label: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};
