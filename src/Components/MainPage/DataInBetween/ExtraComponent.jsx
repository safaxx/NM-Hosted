import React, { useState } from 'react';
import './Extra.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faToggleOn, faQrcode, faList } from '@fortawesome/free-solid-svg-icons';
import FormComponent from '../Filter/FormComponent';

export default function ExtraComponent() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="between">
        <div>
          <p>
            Client: <b style={{ color: '#29B8AA' }}>GSI</b>
          </p>
          <button className="butt">
            <FontAwesomeIcon icon={faList} /> List Of Contracts
          </button>
        </div>

        <div className="form-filter">
          <div className="toggle">
            <FontAwesomeIcon icon={faToggleOn} className="tg" />
            <p>
              <b>Only Contracts in Force</b>
            </p>
          </div>
          <div className="icon-container">
            <button onClick={toggleModal}>
              <FontAwesomeIcon icon={faFilter} className="icon" />
            </button>
            <div className="popup">Filters</div>
          </div>
          <div className="icon-container">
            <button>
              <FontAwesomeIcon icon={faQrcode} className="icon" />
            </button>
            <div className="popup">Widgets</div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-button" onClick={toggleModal}>
              &times;
            </button>
            <FormComponent />
          </div>
        </div>
      )}
    </>
  );
}
