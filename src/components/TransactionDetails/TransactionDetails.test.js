import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import TransactionDetails from './TransactionDetails';

describe('TransactionDetails Component', () => {
  const mockOnSubmit = jest.fn();
  const mockOnCancel = jest.fn();

  beforeEach(() => {
    mockOnSubmit.mockClear();
    mockOnCancel.mockClear();
  });

  test('renders TransactionDetails component with all required sections', () => {
    render(<TransactionDetails onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);
    
    // Check main title
    expect(screen.getByText('Transaction Details')).toBeInTheDocument();
    expect(screen.getByText('Please fill in the required information below')).toBeInTheDocument();
    
    // Check QR Code section
    expect(screen.getByText('QR Code')).toBeInTheDocument();
    expect(screen.getByText('Scan to verify transaction details')).toBeInTheDocument();
    
    // Check User Details section
    expect(screen.getByText('User Details')).toBeInTheDocument();
    expect(screen.getByLabelText(/CRN/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Account Number/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Name of Corporate/)).toBeInTheDocument();
    
    // Check Business Details section
    expect(screen.getByText('Business Details')).toBeInTheDocument();
    expect(screen.getByLabelText(/PAN/)).toBeInTheDocument();
    expect(screen.getByLabelText(/GSTIN/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Doing Business As/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Line of Business/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Mobile Number/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email ID/)).toBeInTheDocument();
    
    // Check buttons
    expect(screen.getByText('Confirm and Submit')).toBeInTheDocument();
    expect(screen.getByText('Cancel')).toBeInTheDocument();
  });

  test('displays validation errors for required fields', async () => {
    render(<TransactionDetails onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);
    
    const submitButton = screen.getByText('Confirm and Submit');
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText('CRN is required')).toBeInTheDocument();
      expect(screen.getByText('Account Number is required')).toBeInTheDocument();
      expect(screen.getByText('Name of Corporate is required')).toBeInTheDocument();
      expect(screen.getByText('PAN is required')).toBeInTheDocument();
      expect(screen.getByText('GSTIN is required')).toBeInTheDocument();
      expect(screen.getByText('Line of Business is required')).toBeInTheDocument();
      expect(screen.getByText('Mobile Number is required')).toBeInTheDocument();
      expect(screen.getByText('Email ID is required')).toBeInTheDocument();
    });
    
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  test('validates email format', async () => {
    render(<TransactionDetails onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);
    
    const emailInput = screen.getByLabelText(/Email ID/);
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    
    const submitButton = screen.getByText('Confirm and Submit');
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument();
    });
    
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  test('validates PAN format', async () => {
    render(<TransactionDetails onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);
    
    const panInput = screen.getByLabelText(/PAN/);
    fireEvent.change(panInput, { target: { value: 'invalid-pan' } });
    
    const submitButton = screen.getByText('Confirm and Submit');
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(screen.getByText('Please enter a valid PAN (e.g., ABCDE1234F)')).toBeInTheDocument();
    });
    
    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  test('submits form with valid data', async () => {
    render(<TransactionDetails onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);
    
    // Fill all required fields with valid data
    fireEvent.change(screen.getByLabelText(/CRN/), { target: { value: 'CRN123456789' } });
    fireEvent.change(screen.getByLabelText(/Account Number/), { target: { value: 'ACC987654321' } });
    fireEvent.change(screen.getByLabelText(/Name of Corporate/), { target: { value: 'Tech Solutions Inc.' } });
    fireEvent.change(screen.getByLabelText(/PAN/), { target: { value: 'ABCDE1234F' } });
    fireEvent.change(screen.getByLabelText(/GSTIN/), { target: { value: '12ABCDE1234F1Z5' } });
    fireEvent.change(screen.getByLabelText(/Line of Business/), { target: { value: 'Software Development' } });
    fireEvent.change(screen.getByLabelText(/Mobile Number/), { target: { value: '9876543210' } });
    fireEvent.change(screen.getByLabelText(/Email ID/), { target: { value: 'contact@techsolutions.com' } });
    
    const submitButton = screen.getByText('Confirm and Submit');
    fireEvent.click(submitButton);
    
    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith(expect.objectContaining({
        crn: 'CRN123456789',
        accountNumber: 'ACC987654321',
        nameOfCorporate: 'Tech Solutions Inc.',
        pan: 'ABCDE1234F',
        gstin: '12ABCDE1234F1Z5',
        lineOfBusiness: 'Software Development',
        mobileNumber: '9876543210',
        emailId: 'contact@techsolutions.com'
      }));
    });
  });

  test('calls onCancel when Cancel button is clicked', () => {
    render(<TransactionDetails onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);
    
    const cancelButton = screen.getByText('Cancel');
    fireEvent.click(cancelButton);
    
    expect(mockOnCancel).toHaveBeenCalled();
  });

  test('initializes form with provided initial data', () => {
    const initialData = {
      crn: 'CRN999888777',
      accountNumber: 'ACC111222333',
      nameOfCorporate: 'Initial Corp'
    };
    
    render(
      <TransactionDetails 
        onSubmit={mockOnSubmit} 
        onCancel={mockOnCancel} 
        initialData={initialData}
      />
    );
    
    expect(screen.getByDisplayValue('CRN999888777')).toBeInTheDocument();
    expect(screen.getByDisplayValue('ACC111222333')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Initial Corp')).toBeInTheDocument();
  });
});