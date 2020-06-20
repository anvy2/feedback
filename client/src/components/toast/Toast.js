import React from 'react';
import './Toast.css';

const Toast = (position, type, title, message, icon) => {
  return (
    <div className={`notification-container ${position}`}>
      <div
        className={`notification toast ${position}`}
        style={{ backgroundColor: type }}
      >
        <button>X</button>
        <div className="notification-image">
          <img src={icon} alt="" />
        </div>
        <div>
          <p className="notification-title">{title}</p>
          <p className="notification-message">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Toast;
