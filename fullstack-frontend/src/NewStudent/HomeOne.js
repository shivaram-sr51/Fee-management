import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function HomeOne() {
  const [NewEditStudent, setNewEditStudent] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showWarning, setShowWarning] = useState(false); // State for showing the warning box
  const [actionType, setActionType] = useState(""); // To track if it's "Edit" or "Delete"
  const [selectedStudentId, setSelectedStudentId] = useState(null); // State to store the student ID
  const navigate = useNavigate();

  useEffect(() => {
    LoadNewEditStudent();
  }, []);

  const LoadNewEditStudent = async () => {
    try {
      const result = await axios.get("http://localhost:8080/NewStudentss");
      if (Array.isArray(result.data)) {
        setNewEditStudent(result.data);
      } else {
        setNewEditStudent([]); // Default to empty array if the data is not an array
      }
    } catch (error) {
      console.error("Error loading student data:", error);
      setNewEditStudent([]); // Default to empty array in case of an error
    }
  };

  const deleteEditNewStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/NewStudent/${id}`);
      LoadNewEditStudent();
      toast.success("Student record deleted successfully!"); // Success toast message
    } catch (error) {
      console.log("Error deleting student data:", error);
      toast.error("Failed to delete the student record!"); // Error toast message
    }
  };

  // Filtered data based on the search term (now by register number)
  const filteredNewEditStudent = NewEditStudent.filter(
    (NewEditStudents) =>
      NewEditStudents.registerNumber &&
      NewEditStudents.registerNumber
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  const handleActionClick = (id, type) => {
    setSelectedStudentId(id);
    setActionType(type); // Set the action type ("Edit" or "Delete")
    setShowWarning(true); // Show the warning box
  };

  const handleConfirmAction = () => {
    if (selectedStudentId !== null) {
      if (actionType === "Delete") {
        deleteEditNewStudent(selectedStudentId); // Call delete function
      } else if (actionType === "Edit") {
        navigate(`/ENS/${selectedStudentId}`); // Navigate to edit page
      }
    }
    setShowWarning(false); // Close the warning box
  };

  const handleCancelAction = () => {
    setShowWarning(false); // Close the warning box
  };

  return (
    <>
      <div>
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <Link className="btn btn-dark go-back-button" to="/Admin">
              Go Back
            </Link>
            <form className="d-flex" role="search">
              {/* Search Input */}
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Register No"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </form>
          </div>
        </nav>
      </div>

      <div className="container">
        {filteredNewEditStudent.length === 0 ? (
          <p>No data found</p> // Display message if no data found
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">Register Number</th>
                <th scope="col">Name</th>
                <th scope="col">Date of Birth</th>
                <th scope="col">Standard</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* Map through filtered data */}
              {filteredNewEditStudent.map((NewEditStudentsss, index) => (
                <tr key={NewEditStudentsss.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{NewEditStudentsss.registerNumber}</td>
                  <td>{NewEditStudentsss.name}</td>
                  <td>{NewEditStudentsss.dateOfBirth}</td>
                  <td>{NewEditStudentsss.standard}</td>
                  <td>
                    <button
                      className="btn btn-outline-primary mx-2"
                      onClick={() =>
                        handleActionClick(NewEditStudentsss.id, "Edit")
                      }
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger mx-2"
                      onClick={() =>
                        handleActionClick(NewEditStudentsss.id, "Delete")
                      }
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

      {/* Warning Dialog */}
      {showWarning && (
        <div className="warning-dialog">
          <div className="dialog-overlay">
            <div className="dialog-box">
              <p>
                Are you sure you want to{" "}
                {actionType === "Delete" ? "delete" : "edit"} this record?
              </p>
              <button className="btn btn-danger" onClick={handleConfirmAction}>
                Yes
              </button>
              <button
                className="btn btn-secondary"
                onClick={handleCancelAction}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      <ToastContainer />

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
