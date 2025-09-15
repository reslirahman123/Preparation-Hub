import React, { useState } from 'react';
import Form from './Form';
import './TransactionDetails.css';

function TransactionDetails({ onSubmit, onCancel, initialData = {} }) {
  const [formData, setFormData] = useState(initialData);

  // User Details fields configuration
  const userDetailsFields = [
    {
      name: 'crn',
      label: 'CRN',
      type: 'text',
      required: true,
      placeholder: 'Enter Corporate Registration Number'
    },
    {
      name: 'accountNumber',
      label: 'Account Number',
      type: 'text',
      required: true,
      placeholder: 'Enter Account Number'
    },
    {
      name: 'nameOfCorporate',
      label: 'Name of Corporate',
      type: 'text',
      required: true,
      placeholder: 'Enter Corporate Name'
    }
  ];

  // Business Details fields configuration
  const businessDetailsFields = [
    {
      name: 'pan',
      label: 'PAN',
      type: 'text',
      required: true,
      placeholder: 'ABCDE1234F'
    },
    {
      name: 'gstin',
      label: 'GSTIN',
      type: 'text',
      required: true,
      placeholder: 'Enter GSTIN Number'
    },
    {
      name: 'doingBusinessAs',
      label: 'Doing Business As',
      type: 'text',
      required: false,
      placeholder: 'Enter DBA Name'
    },
    {
      name: 'lineOfBusiness',
      label: 'Line of Business',
      type: 'text',
      required: true,
      placeholder: 'Enter Business Line'
    },
    {
      name: 'mobileNumber',
      label: 'Mobile Number',
      type: 'tel',
      required: true,
      placeholder: '9876543210'
    },
    {
      name: 'emailId',
      label: 'Email ID',
      type: 'email',
      required: true,
      placeholder: 'example@domain.com'
    }
  ];

  const handleFormSubmit = (data) => {
    setFormData(data);
    if (onSubmit) {
      onSubmit(data);
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  const generateQRCodeData = () => {
    // Generate QR code data based on form data
    return JSON.stringify({
      crn: formData.crn || 'N/A',
      accountNumber: formData.accountNumber || 'N/A',
      corporate: formData.nameOfCorporate || 'N/A',
      timestamp: new Date().toISOString()
    });
  };

  return (
    <div className="transaction-details">
      <div className="transaction-header">
        <h2>Transaction Details</h2>
        <p>Please fill in the required information below</p>
      </div>
      
      <div className="transaction-content">
        {/* QR Code Section */}
        <div className="qr-section">
          <h3>QR Code</h3>
          <div className="qr-code-container">
            <div className="qr-code-placeholder">
              <div className="qr-pattern">
                {/* Simple QR code pattern representation */}
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="qr-row">
                    {[...Array(8)].map((_, j) => (
                      <div 
                        key={j} 
                        className={`qr-cell ${(i + j) % 2 === 0 ? 'filled' : ''}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <p className="qr-info">Scan to verify transaction details</p>
            {formData.crn && (
              <div className="qr-data">
                <small>Data: {generateQRCodeData()}</small>
              </div>
            )}
          </div>
        </div>

        {/* Form Section */}
        <div className="form-section">
          <Form
            sections={[
              {
                title: "User Details",
                fields: userDetailsFields
              },
              {
                title: "Business Details", 
                fields: businessDetailsFields
              }
            ]}
            initialData={formData}
            onSubmit={handleFormSubmit}
            onCancel={handleCancel}
            submitButtonText="Confirm and Submit"
            cancelButtonText="Cancel"
            className="transaction-form"
          />
        </div>
      </div>
    </div>
  );
}

export default TransactionDetails;