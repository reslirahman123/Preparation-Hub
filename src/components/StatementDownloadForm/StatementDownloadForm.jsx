import React from 'react';
import './StatementDownloadForm.css';

const StatementDownloadForm = () => {
  const handleCancel = () => {
    console.log('Cancel clicked');
  };

  const handleSendEmail = () => {
    console.log('Send via email clicked');
  };

  const handleDownloadImage = () => {
    console.log('Download image clicked');
  };

  return (
    <div className="modal-overlay">
      <div className="statement-modal">
        <header className="modal-header">
          <h2 className="modal-title">Transaction details</h2>
        </header>

        <div className="modal-content">
          {/* User Details Section */}
          <section className="details-section">
            <div className="detail-row">
              <span className="detail-label">CRN / Company:</span>
              <span className="detail-value">1234567890, Tata Consultancy Services</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Account no.:</span>
              <span className="detail-value">98776565412, TCS North</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Name of corporate:</span>
              <span className="detail-value">Kiran Stores</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">IT Type:</span>
              <span className="detail-value">Sole Proprietor</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">PAN:</span>
              <span className="detail-value">CDF6541000</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">GSTIN:</span>
              <span className="detail-value">27MAHJ654651Z</span>
            </div>
          </section>

          {/* Business Details Section */}
          <section className="details-section">
            <div className="detail-row">
              <span className="detail-label">Doing business as:</span>
              <span className="detail-value">Kiran's</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Line of business:</span>
              <span className="detail-value">Retail store</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Mobile no.:</span>
              <span className="detail-value">9999999999</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">Email ID:</span>
              <span className="detail-value">kiran@gmail.com</span>
            </div>
          </section>

          {/* QR Code Section */}
          <section className="qr-section">
            <div className="qr-header">
              <h3 className="qr-title">Kiran's</h3>
              <p className="qr-subtitle">Current 98776565412</p>
            </div>
            <p className="qr-instruction">
              Share this QR code to receive money in your account
            </p>
            <div className="qr-code-container">
              <div className="qr-code-placeholder">
                {/* QR Code placeholder - in a real app, this would be generated */}
                <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="150" height="150" fill="white" stroke="#000" strokeWidth="2"/>
                  <rect x="10" y="10" width="30" height="30" fill="black"/>
                  <rect x="110" y="10" width="30" height="30" fill="black"/>
                  <rect x="10" y="110" width="30" height="30" fill="black"/>
                  <rect x="50" y="50" width="50" height="50" fill="black"/>
                  {/* Simple QR code pattern */}
                  <rect x="15" y="15" width="5" height="5" fill="white"/>
                  <rect x="25" y="15" width="5" height="5" fill="white"/>
                  <rect x="15" y="25" width="5" height="5" fill="white"/>
                  <rect x="25" y="25" width="5" height="5" fill="white"/>
                  <rect x="115" y="15" width="5" height="5" fill="white"/>
                  <rect x="125" y="15" width="5" height="5" fill="white"/>
                  <rect x="115" y="25" width="5" height="5" fill="white"/>
                  <rect x="125" y="25" width="5" height="5" fill="white"/>
                  <rect x="15" y="115" width="5" height="5" fill="white"/>
                  <rect x="25" y="115" width="5" height="5" fill="white"/>
                  <rect x="15" y="125" width="5" height="5" fill="white"/>
                  <rect x="25" y="125" width="5" height="5" fill="white"/>
                </svg>
              </div>
            </div>
            <div className="upi-id">
              <span className="upi-label">UPI ID:</span>
              <span className="upi-value">kiran130825@kotakpay</span>
            </div>
          </section>
        </div>

        {/* Action Buttons */}
        <footer className="modal-footer">
          <button 
            type="button" 
            className="btn btn-cancel" 
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button 
            type="button" 
            className="btn btn-secondary" 
            onClick={handleSendEmail}
          >
            Send via email
          </button>
          <button 
            type="button" 
            className="btn btn-primary" 
            onClick={handleDownloadImage}
          >
            Download image
          </button>
        </footer>
      </div>
    </div>
  );
};

export default StatementDownloadForm;