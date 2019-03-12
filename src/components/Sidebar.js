import React from 'react';

const Sidebar = ({ showRandomColor }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar__content">
        <div className="randomcolor__button">
          <button onClick={showRandomColor} className="button button--random">Random Color</button>
        </div>
        <ul className="sidebar__list">
          <li className="sidebar__listItem">Red</li>
          <li className="sidebar__listItem">Orange</li>
          <li className="sidebar__listItem">Yellow</li>
          <li className="sidebar__listItem">Green</li>
          <li className="sidebar__listItem">Blue</li>
          <li className="sidebar__listItem">Purle</li>
          <li className="sidebar__listItem">Brown</li>
          <li className="sidebar__listItem">Gray</li>
        </ul>
      </div>
    </aside>
  )
}

export default Sidebar;