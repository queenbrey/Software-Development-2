import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import './DeleteTicketConfirmation.css'; // Import the CSS file

function DeleteTicketConfirmation() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleDeleteClick = () => {
    setShowConfirmation(true);
  };

  const handleCancelClick = () => {
    setShowConfirmation(false);
  };

  const handleConfirmClick = () => {
    setShowConfirmation(false);
    setShowSuccessMessage(true);
    // You can add logic to delete the ticket here
    console.log("Ticket deleted!");
  };

  const handleOkClick = () => {
    setShowSuccessMessage(false);
  };

  return (
    <div>
      <div className="trash-icon-container" onClick={handleDeleteClick}>
        <DeleteIcon className="trash-icon" />
      </div>
      {showConfirmation && (
        <div className="confirmation-modal">
          <div className="modal-content">
            <div className="close-icon-container" onClick={handleCancelClick}>
              <CloseIcon className="close-icon" />
            </div>
            <h2 className="delete-heading">Delete Ticket?</h2>
            <p className="subtext">Any associated data or history will also be lost.</p>
            <div className="button-group">
              <button onClick={handleCancelClick} className="cancel-button">Cancel</button>
              <button onClick={handleConfirmClick} className="confirm-button">Confirm</button>
            </div>
          </div>
        </div>
      )}
      {showSuccessMessage && (
        <div className="success-modal">
          <div className="modal-content">
            <h2 className="success-heading">Ticket successfully deleted!</h2>
            <button onClick={handleOkClick} className="ok-button">OK</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DeleteTicketConfirmation;
