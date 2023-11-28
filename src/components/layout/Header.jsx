import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header>
      <div className="header-container container">
        <span>Task-App</span>
        <div className={`menu-container ${openMenu? 'open-menu' : ''}`}>
          <div className="container-close-menu">
            <button className="menu-buttons" onClick={() => setOpenMenu(false)}>
              <IoClose />
            </button>
          </div>
          <nav>
            <ul>
              <li><a href="#">section1</a></li>
              <li><a href="#">section2</a></li>
            </ul>
          </nav>
        </div>
        <button className="menu-buttons" onClick={() => setOpenMenu(true)}>
          <IoMenu />
        </button>
      </div>
    </header>
  )
}
