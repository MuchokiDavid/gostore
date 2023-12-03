import React, { useEffect, useState } from 'react';
import './Notification.css';

function Notification({ message }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return isVisible ? <div className="notification show">{message}</div> : null;
}

export default Notification;
