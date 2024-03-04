import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';

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
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', cursor: 'pointer' }} onClick={handleDeleteClick}>
        <DeleteIcon style={{ fontSize: '48px' }} />
      </div>
      {showConfirmation && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 999 }}>
          <div style={{ position: 'relative', width: '300px', height: '200px', backgroundColor: 'white', padding: '20px', borderRadius: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <div style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer' }} onClick={handleCancelClick}>
              <CloseIcon style={{ fontSize: '24px' }} />
            </div>
            <h2 style={{ fontSize: '25px', fontWeight: 'bold', textAlign: 'center' }}>Delete Ticket?</h2>
            <p style={{ fontSize: '18px', color: '#666', marginBottom: '10px', marginTop: '10px', marginBottom: '10px', textAlign: 'center' }}>Any associated data or history will also be lost.</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
              <button style={{ padding: '8px 35px', border: 'none', borderRadius: '15px', cursor: 'pointer', backgroundColor: '#ccc', color: '#fff' }} onClick={handleCancelClick}>Cancel</button>
              <button style={{ padding: '8px 35px', border: 'none', borderRadius: '15px', cursor: 'pointer', backgroundColor: '#f57272', color: '#fff' }} onClick={handleConfirmClick}>Confirm</button>
            </div>
          </div>
        </div>
      )}
      {showSuccessMessage && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 999 }}>
          <div style={{ position: 'relative', width: '300px', height: '130px', backgroundColor: 'white', padding: '20px', borderRadius: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>Ticket successfully deleted!</h2>
            <button style={{ padding: '8px 35px', border: 'none', borderRadius: '15px', cursor: 'pointer', backgroundColor: '#ccc', color: '#000000', display: 'block', margin: '0 auto' }} onClick={handleOkClick}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default DeleteTicketConfirmation;
