import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [NewFeeHead, setNewFeeHead] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showWarning, setShowWarning] = useState(false); // For delete warning
  const [feeHeadToDelete, setFeeHeadToDelete] = useState(null);
  const [editFeeHeadId, setEditFeeHeadId] = useState(null); // For edit warning
  const [editWarning, setEditWarning] = useState(false); // Edit warning flag
  const navigate = useNavigate();

  useEffect(() => {
    LoadNewFeeHead();
  }, []);

  const LoadNewFeeHead = async () => {
    const result = await axios.get("http://localhost:8080/NewFeeHeadss");
    setNewFeeHead(result.data);
  };

  const deleteFeeHead = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/NewFeeHead/${id}`);
      LoadNewFeeHead();
      toast.success("Deleted successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.error("Error deleting fee head setup:", error);
      toast.error("Failed to delete. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const filteredFeeHeads = NewFeeHead.filter((feeHead) =>
    feeHead.standard.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteClick = (id) => {
    setFeeHeadToDelete(id);
    setShowWarning(true); // Show delete warning
  };

  const handleEditClick = (id) => {
    setEditFeeHeadId(id);
    setEditWarning(true); // Show edit warning
  };

  const handleConfirmDelete = () => {
    if (feeHeadToDelete !== null) {
      deleteFeeHead(feeHeadToDelete); // Call delete function
    }
    setShowWarning(false); // Close delete warning
  };

  const handleCancelDelete = () => {
    setShowWarning(false); // Close delete warning
  };

  const handleConfirmEdit = () => {
    if (editFeeHeadId !== null) {
      navigate(`/ENFH/${editFeeHeadId}`); // Navigate to edit page
    }
    setEditWarning(false); // Close edit warning
  };

  const handleCancelEdit = () => {
    setEditWarning(false); // Close edit warning
  };

  return (
    <>
      <ToastContainer />
      <div>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <Link className="btn btn-dark go-back-button" to="/Admin">
              Go Back
            </Link>

            <form className="d-flex" role="search">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by Standard"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </form>
          </div>
        </nav>
      </div>

      <div className="container">
        {filteredFeeHeads.length === 0 ? (
          <p>No data found</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Fee Head Name</th>
                <th scope="col">Amount</th>
                <th scope="col">Standard</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {filteredFeeHeads.map((NewFeeHeadd, index) => (
                <tr key={NewFeeHeadd.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{NewFeeHeadd.name}</td>
                  <td>{NewFeeHeadd.amount}</td>
                  <td>{NewFeeHeadd.standard}</td>
                  <td>
                    <button
                      className="btn btn-outline-primary mx-2"
                      onClick={() => handleEditClick(NewFeeHeadd.id)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() => handleDeleteClick(NewFeeHeadd.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Delete Warning Dialog */}
      {showWarning && (
        <div className="warning-dialog">
          <div className="dialog-overlay">
            <div className="dialog-box">
              <p>Are you sure you want to delete this fee head?</p>
              <button className="btn btn-danger" onClick={handleConfirmDelete}>
                Yes
              </button>
              <button
                className="btn btn-secondary"
                onClick={handleCancelDelete}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Warning Dialog */}
      {editWarning && (
        <div className="warning-dialog">
          <div className="dialog-overlay">
            <div className="dialog-box">
              <p>Are you sure you want to edit this fee head?</p>
              <button className="btn btn-primary" onClick={handleConfirmEdit}>
                Yes
              </button>
              <button className="btn btn-secondary" onClick={handleCancelEdit}>
                No
              </button>
            </div>
          </div>
        </div>
      )}

      <style>
        {`
          .warning-dialog {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(0, 0, 0, 0.5);
          }
          .dialog-overlay {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
          }
          .dialog-box {
            text-align: center;
          }
          .dialog-box button {
            margin: 10px;
          }
        `}
      </style>
    </>
  );
}
