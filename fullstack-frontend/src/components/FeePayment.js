import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../AppContext";
import jsPDF from "jspdf";
import "jspdf-autotable";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const FeePayment = () => {
  const {
    loadStudentDetails,
    studentDetails,
    paymentAmount,
    setPaymentAmount,
    handleFeePayment,
    feeHeads,
    handleFeeHeadSelection,
  } = useContext(AppContext);

  const [selectedFeeHead, setSelectedFeeHead] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [paymentSearchValue, setPaymentSearchValue] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [editableDetails, setEditableDetails] = useState({});
  const [filteredFeeHeads, setFilteredFeeHeads] = useState([]);
  const [paymentDetails, setPaymentDetails] = useState([]);
  const [filteredPaymentDetails, setFilteredPaymentDetails] = useState([]);

  useEffect(() => {
    if (studentDetails && studentDetails.standard) {
      const filtered = feeHeads.filter(
        (feeHead) => feeHead.standard === studentDetails.standard
      );
      setFilteredFeeHeads(filtered);
    }
  }, [studentDetails, feeHeads]);

  const handleInputChange = (value) => {
    setInputValue(value);
    if (value.length >= 3) {
      loadStudentDetails(value);
    }
  };

  const handlePaymentSearchChange = (value) => {
    setPaymentSearchValue(value);
    if (value.length >= 3) {
      fetchPaymentDetails(value);
    } else {
      setFilteredPaymentDetails([]); // Clear the filtered payment details if the search value is less than 3 characters
    }
  };

  const fetchPaymentDetails = async (studentName) => {
    try {
      const response = await fetch(`http://localhost:8080/api/fee-payments?studentName=${studentName}`);
      if (!response.ok) {
        throw new Error("Failed to fetch payment details");
      }
      const data = await response.json();
      setPaymentDetails(data);
      setFilteredPaymentDetails(data.filter(payment => payment.name.toLowerCase().includes(studentName.toLowerCase()))); // Filter payment details by student name
    } catch (error) {
      setSnackbarMessage("Error fetching payment details. Please try again!");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const handleFeeHeadChange = (event) => {
    const feeHeadId = parseInt(event.target.value);
    const selected = feeHeads.find((feeHead) => feeHead.id === feeHeadId);
    
    if (selected) {
      setSelectedFeeHead(selected);
      handleFeeHeadSelection(feeHeadId, selected.amount);
    }
  };

  const handlePaymentClick = async () => {
    if (!paymentAmount || paymentAmount <= 0) {
      setSnackbarMessage("Please enter a valid payment amount!");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }
    if (!selectedFeeHead || !selectedFeeHead.id) {
      setSnackbarMessage("Please select a fee head!");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
      return;
    }

    const feePaymentDetails = {
      registerNumber: studentDetails.registerNumber,
      name: studentDetails.name,
      standard: studentDetails.standard,
      section: studentDetails.section,
      fixedFee: studentDetails.fixedFee,
      totalFeePaid: (studentDetails.totalFeePaid || 0) + parseInt(paymentAmount),
      dueFee: studentDetails.fixedFee - ((studentDetails.totalFeePaid || 0) + parseInt(paymentAmount)),
      feeHead: selectedFeeHead.name,
      paymentAmount: paymentAmount,
      dateOfPayment: new Date().toISOString().split('T')[0]  // Add date of payment
    };

    try {
      const response = await fetch("http://localhost:8080/api/fee-payments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(feePaymentDetails),
      });
      
      if (!response.ok) {
        throw new Error("Failed to save fee payment");
      }
      
      setSnackbarMessage("Fee payment successful!");
      setSnackbarSeverity("success");
      setSnackbarOpen(true);
      handleFeePayment();
      fetchPaymentDetails(studentDetails.name); // Fetch updated payment details
    } catch (error) {
      setSnackbarMessage("Error processing payment. Please try again!");
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    }
  };

  const generateInvoice = (payment) => {
    const doc = new jsPDF();

    doc.text("Fee Payment Invoice", 20, 10);

    const tableColumn = ["Register Number", "Name", "Standard", "Section", "Fee Head", "Payment Amount", "Date of Payment"];
    const tableRows = [];

    const paymentData = [
      payment.registerNumber,
      payment.name,
      payment.standard,
      payment.section,
      payment.feeHead,
      payment.paymentAmount,
      new Date(payment.dateOfPayment).toLocaleDateString()
    ];
    tableRows.push(paymentData);

    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    doc.save(`${payment.name}_Fee_Payment_Invoice.pdf`);
  };

  // Calculate total fee payment for the searched student
  const totalFeePayment = filteredPaymentDetails.reduce((total, payment) => total + payment.paymentAmount, 0);

  return (
    <div className="alignbox">
      <h2>Fee Payment</h2>
      <input
        className="inp"
        type="text"
        placeholder="Enter Student Name "
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
      />

      {studentDetails && inputValue.length >= 3 && (
        <div>
          <h3>Student Details</h3>
          <table border="1" cellPadding="8" className="feebox">
            <thead>
              <tr>
                <th>Register Number</th>
                <th>Name</th>
                <th>Standard</th>
                <th>Section</th>
                <th>Fixed Fee (₹)</th>
                <th>Overall Paid Fee (₹)</th>
                <th>Due Fee (₹)</th>
                <th>Select Fee Heads</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{studentDetails.registerNumber}</td>
                <td>{studentDetails.name}</td>
                <td>{studentDetails.standard}</td>
                <td>{studentDetails.section}</td>
                <td>{studentDetails.fixedFee}</td>
                <td>{studentDetails.totalFeePaid || 0}</td>
                <td>{studentDetails.fixedFee - (studentDetails.totalFeePaid || 0)}</td>
                <td>
                  <select className="inp" onChange={handleFeeHeadChange}>
                    <option value="">Select Fee Head</option>
                    {filteredFeeHeads.map((feeHead) => (
                      <option key={feeHead.id} value={feeHead.id}>
                        {feeHead.name} - ₹{feeHead.amount}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            </tbody>
          </table>

          <div style={{ marginTop: "10px" }}>
            <input
              type="number"
              className="inp"
              placeholder="Enter Payment Amount"
              value={paymentAmount}
              onChange={(e) => setPaymentAmount(e.target.value)}
            />
            <button onClick={handlePaymentClick} className="buttonn">
              Pay Fee
            </button>
          </div>
        </div>
      )}

      <div className="feepaymentbox">
        <h2>Search Payment Details</h2>
        <input
          className="inp"
          type="text"
          placeholder="Search for Fee Detail"
          value={paymentSearchValue}
          onChange={(e) => handlePaymentSearchChange(e.target.value)}
        />
      </div>

      {filteredPaymentDetails.length > 0 && (
        <div>
          <h3>Payment Details</h3>
          <table  cellPadding="6" className="feeboxs">
            <thead>
              <tr>
                <th>Register Number</th>
                <th>Name</th>
                <th>Standard</th>
                <th>Section</th>
                <th>Fixed Fee (₹)</th>
                <th>Due Fee (₹)</th>
                <th>Fee Head</th>
                <th>Payment Amount (₹)</th>
                <th>Date of Payment</th>
                <th>Get Invoice</th>
              </tr>
            </thead>
            <tbody>
              {filteredPaymentDetails.map((payment) => (
                <tr key={payment.id}>
                  <td>{payment.registerNumber}</td>
                  <td>{payment.name}</td>
                  <td>{payment.standard}</td>
                  <td>{payment.section}</td>
                  <td>{payment.fixedFee}</td>
                  <td>{payment.dueFee}</td>
                  <td>{payment.feeHead}</td>
                  <td>{payment.paymentAmount}</td>
                  <td>{new Date(payment.dateOfPayment).toLocaleDateString()}</td>
                  <td>
                    <button onClick={() => generateInvoice(payment)} className="buttonn">
                      Get Invoice
                    </button>
                  </td>
                </tr>
              ))}
              {/* Total Row */}
              <tr>
                <td colSpan="7" style={{ textAlign: "right", fontWeight: "bold" }}>Total Fee Paid:</td>
                <td style={{ fontWeight: "bold" }}>₹{totalFeePayment}</td>
                <td colSpan="2"></td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity={snackbarSeverity}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default FeePayment;