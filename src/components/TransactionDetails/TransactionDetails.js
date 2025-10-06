import React, { useState } from 'react';
import './TransactionDetails.css';

const TransactionDetails = ({ isOpen, onClose }) => {
  const [qrCodeUpiId] = useState('merchant@upi');

  // Mock data for the transaction details
  const userDetails = {
    crn: 'TCS123456',
    companyName: 'Tata Consultancy Services',
    accountNo: 'ACC001',
    accountName: 'TCS North',
    corporateName: 'TCS Limited',
    itType: 'Sole Proprietor',
    pan: 'PANCS1234A',
    gstin: 'GST123456789'
  };

  const businessDetails = {
    doingBusinessAs: "Kiran's",
    lineOfBusiness: 'Retail store',
    mobileNo: '+91 9876543210',
    emailId: 'kiran@example.com'
  };

  const handleCopyUpiId = () => {
    navigator.clipboard.writeText(qrCodeUpiId);
    alert('UPI ID copied to clipboard!');
  };

  const handleSendEmail = () => {
    alert('QR code sent via email!');
  };

  const handleDownloadImage = () => {
    alert('QR code image downloaded!');
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Transaction details</h2>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>
        
        <div className="modal-body">
          {/* User Details Section */}
          <div className="details-section">
            <h3>User Details</h3>
            <div className="details-grid">
              <div className="detail-item">
                <span className="label">CRN / Company:</span>
                <span className="value">{userDetails.crn} / {userDetails.companyName}</span>
              </div>
              <div className="detail-item">
                <span className="label">Account no.:</span>
                <span className="value">{userDetails.accountNo} / {userDetails.accountName}</span>
              </div>
              <div className="detail-item">
                <span className="label">Name of corporate:</span>
                <span className="value">{userDetails.corporateName}</span>
              </div>
              <div className="detail-item">
                <span className="label">IT Type:</span>
                <span className="value">{userDetails.itType}</span>
              </div>
              <div className="detail-item">
                <span className="label">PAN:</span>
                <span className="value">{userDetails.pan}</span>
              </div>
              <div className="detail-item">
                <span className="label">GSTIN:</span>
                <span className="value">{userDetails.gstin}</span>
              </div>
            </div>
          </div>

          {/* Business Details Section */}
          <div className="details-section">
            <h3>Business Details</h3>
            <div className="details-grid">
              <div className="detail-item">
                <span className="label">Doing business as:</span>
                <span className="value">{businessDetails.doingBusinessAs}</span>
              </div>
              <div className="detail-item">
                <span className="label">Line of business:</span>
                <span className="value">{businessDetails.lineOfBusiness}</span>
              </div>
              <div className="detail-item">
                <span className="label">Mobile no.:</span>
                <span className="value">{businessDetails.mobileNo}</span>
              </div>
              <div className="detail-item">
                <span className="label">Email ID:</span>
                <span className="value">{businessDetails.emailId}</span>
              </div>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="qr-section">
            <h3>QR Code</h3>
            <div className="qr-container">
              <div className="qr-code-placeholder">
                {/* Placeholder for QR code - in a real app, this would be generated */}
                <div className="qr-code">
                  <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                    {/* Simple QR code pattern */}
                    <rect width="120" height="120" fill="white" stroke="#000" strokeWidth="2"/>
                    {/* Corner squares */}
                    <rect x="10" y="10" width="20" height="20" fill="black"/>
                    <rect x="90" y="10" width="20" height="20" fill="black"/>
                    <rect x="10" y="90" width="20" height="20" fill="black"/>
                    {/* Some pattern blocks */}
                    <rect x="40" y="20" width="5" height="5" fill="black"/>
                    <rect x="50" y="20" width="5" height="5" fill="black"/>
                    <rect x="60" y="20" width="5" height="5" fill="black"/>
                    <rect x="40" y="30" width="5" height="5" fill="black"/>
                    <rect x="60" y="30" width="5" height="5" fill="black"/>
                    <rect x="20" y="40" width="5" height="5" fill="black"/>
                    <rect x="30" y="40" width="5" height="5" fill="black"/>
                    <rect x="80" y="40" width="5" height="5" fill="black"/>
                    <rect x="90" y="40" width="5" height="5" fill="black"/>
                    <rect x="40" y="50" width="5" height="5" fill="black"/>
                    <rect x="50" y="50" width="5" height="5" fill="black"/>
                    <rect x="60" y="50" width="5" height="5" fill="black"/>
                  </svg>
                </div>
                <div className="upi-info">
                  <span className="upi-label">UPI ID:</span>
                  <span className="upi-id">{qrCodeUpiId}</span>
                  <button className="copy-button" onClick={handleCopyUpiId}>
                    Copy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-primary" onClick={handleSendEmail}>
            Send via email
          </button>
          <button className="btn-primary" onClick={handleDownloadImage}>
            Download image
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetails;