import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../AppContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const FeeHeadSetup = () => {
  const { standards, selectedStandard, setSelectedStandard } =
    useContext(AppContext);
  const [newFeeHead, setNewFeeHead] = useState({
    name: "",
    amount: "",
    standard: "",
  });
  const [feeHeadsList, setFeeHeadsList] = useState([]);
  const [feeHeads, setFeeHeads] = useState([]);

  // Fetch fee heads for selected standard
  useEffect(() => {
    if (selectedStandard) {
      axios
        .get(`http://localhost:8080/api/feeheads/${selectedStandard}`)
        .then((response) => setFeeHeads(response.data))
        .catch(() => toast.error("Failed to fetch fee heads!"));
    }
  }, [selectedStandard]);

  // Add to batch
  const handleAddToList = () => {
    if (!newFeeHead.name || !newFeeHead.amount || !newFeeHead.standard) {
      toast.error("Fill all fields before adding!");
      return;
    }
    setFeeHeadsList([...feeHeadsList, newFeeHead]);
    setNewFeeHead({ name: "", amount: "", standard: "" });
    toast.success("Added to batch!");
  };

  // Reset batch
  const handleResetBatch = () => {
    setFeeHeadsList([]);
    toast.info("Batch reset successfully!");
  };

  // Delete individual fee head from batch
  const handleDeleteFromBatch = (index) => {
    const updatedList = feeHeadsList.filter((_, i) => i !== index);
    setFeeHeadsList(updatedList);
    toast.warn("Removed from batch!");
  };

  // Save all
  const handleSaveAll = async () => {
    if (feeHeadsList.length === 0) {
      toast.error("No fee heads to save!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/feeheads/batch",
        feeHeadsList
      );
      setFeeHeads([...feeHeads, ...response.data]);
      setFeeHeadsList([]);
      toast.success("All fee heads saved!");
    } catch (error) {
      toast.error("Saving failed!");
    }
  };

  // Calculate total amount
  const totalAmount = feeHeadsList.reduce(
    (sum, item) => sum + Number(item.amount),
    0
  );

  return (
    <div className="feeheadbox">
      <h2>Fee Head Setup</h2>

      {/* Input Fields */}
      <input
        type="text"
        placeholder="Fee Head Name"
        value={newFeeHead.name}
        onChange={(e) => setNewFeeHead({ ...newFeeHead, name: e.target.value })}
        className="inp"
      />
      <input
        type="number"
        placeholder="Amount"
        value={newFeeHead.amount}
        onChange={(e) =>
          setNewFeeHead({ ...newFeeHead, amount: e.target.value })
        }
        className="inp"
      />
      <select
        value={newFeeHead.standard}
        onChange={(e) =>
          setNewFeeHead({ ...newFeeHead, standard: e.target.value })
        }
        className="inp"
      >
        <option value="">Select Standard</option>
        {standards.map((std) => (
          <option key={std} value={std}>
            {std}
          </option>
        ))}
      </select>

      {/* Action Buttons */}
      <div className="button-group">
        <button className="buttonn" onClick={handleAddToList}>
          Add to Batch
        </button>
        <button className="buttonn danger" onClick={handleResetBatch}>
          Reset Batch
        </button>
        <button className="buttonn success" onClick={handleSaveAll}>
          Save All ({feeHeadsList.length})
        </button>
      </div>

      {/* Batch Preview */}

{/* {feeHeadsList.length > 0 && (
  <div className="batch-preview">
    <table>
      <thead>
        <tr>
          <th><h4>Fee Description</h4></th>
          <th><h4>Amount (in Rs)</h4></th>
        </tr>
      </thead>
      <tbody>
        {feeHeadsList.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                ₹{item.amount} (Std {item.standard})
                <button
                  className="buttonn danger small"
                  style={{ marginLeft: '10px' }}
                  onClick={() => handleDeleteFromBatch(index)}
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <h6>Total Fee ₹{totalAmount}</h6>
  </div>
)} */}
{feeHeadsList.length > 0 && (
  <div className="batch-preview">

    <table style={{ borderCollapse: 'collapse', width: '50%' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid black', padding: '6px' }}><h4>Fee Description</h4></th>
          <th style={{ border: '1px solid black', padding: '6px' }}><h4>Amount (in Rs)</h4></th>
        </tr>
      </thead>
      <tbody>
        {feeHeadsList.map((item, index) => (
          <tr key={index}>
            <td style={{ border: '1px solid black', padding: '2px' }}>{item.name}</td>
            <td style={{ border: '1px solid black', padding: '2px' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                ₹{item.amount} (Std {item.standard})
                <button
                  className="buttonn danger small"
                  style={{ marginLeft: '10px' }}
                  onClick={() => handleDeleteFromBatch(index)}
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="total-fee"> 
    <h6>Total Fee ₹{totalAmount}</h6>
    </div>
  </div>
)}



      {/* Existing Fee Heads */}
      {selectedStandard && (
        <div className="existing-feeheads">
          <h3>Current Fee Heads (Standard {selectedStandard})</h3>
          <ul>
            {feeHeads.map((feeHead) => (
              <li key={feeHead.id}>
                {feeHead.name} - ₹{feeHead.amount}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FeeHeadSetup;
