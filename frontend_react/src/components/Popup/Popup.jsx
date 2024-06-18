import React, { useState } from "react";
import '../Popup/Popup.scss';

const Popup = ({ title, workDescription }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <h3 className= 'title' onClick={handleClick}>{title}</h3>
      {isOpen && <div className="popup">{workDescription}</div>}
    </>
  );
};

export default Popup; 
