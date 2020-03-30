import React, { Component } from 'react';
import {FaTimes} from 'react-icons/fa'


const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  
    return (
      <div className={showHideClassName}>
        <section className='modal-main'>
          {children}
          <button
            onClick={handleClose}
            className="btn modal-close-btn"
          >
            <FaTimes size="20" />
          </button>
        </section>
      </div>
    );
};
  
export default Modal