import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../AppContext";

const StudentDetails = () => {
  const {
    loadStudentDetails,
    studentDetails,
  } = useContext(AppContext);

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);

    // Load data only if input length is >= 3
    if (value.length >= 3) {
      loadStudentDetails(value);
    }
  };

  return (
    <div className="alignbox">
    <div>
      <h2>Student Details</h2>
      <input
        type="text"
        placeholder="Enter Student Name"
        value={inputValue}
        className="inp"
        onChange={(e) => handleInputChange(e.target.value)}
      />
{studentDetails && inputValue.length >= 3 && (
  <div>
    
    <table border="1" cellPadding="4" style={{ borderCollapse: "collapse", width: "100%" ,border:"none"}}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Standard</th>
          <th>Address</th>
          <th>Father's Name</th>
          <th>Register Number</th>
          <th>Fixed Fee (₹)</th>
          <th>Total Fee Paid (₹)</th>
          <th>Due Fee (₹)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{studentDetails.name}</td>
          
          <td>{studentDetails.standard}</td>
          <td>{studentDetails.address}</td>
          <td>{studentDetails.fathersName}</td>
          <td>{studentDetails.registerNumber}</td>
          <td>{studentDetails.fixedFee}</td>
          <td>{studentDetails.totalFeePaid}</td>
          <td>{studentDetails.fixedFee - studentDetails.totalFeePaid}</td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th>Guardian Name</th>
          <th>Place Pincode</th>
          <th>District</th>
          <th>Phone</th>
          <th>Bus Place Name</th>
          <th>Bus Route No</th>
          <th>Section</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{studentDetails.guardianName}</td>
          <td>{studentDetails.placePincode}</td>
          <td>{studentDetails.district}</td>
          <td>{studentDetails.phone}</td>
          <td>{studentDetails.busPlaceName}</td>
          <td>{studentDetails.busRouteNo}</td>
          <td>{studentDetails.section}</td>
          <td>{studentDetails.gender}</td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th>Caste</th>
          <th>Community</th>
          <th>Nationality</th>
          <th>Religion</th>
          <th>Mother Tongue</th>
          <th>State</th>
          <th>Hostel Status</th>
          <th>Blood Group</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{studentDetails.caste}</td>
          <td>{studentDetails.community}</td>
          <td>{studentDetails.nationality}</td>
          <td>{studentDetails.religion}</td>
          <td>{studentDetails.motherTongue}</td>
          <td>{studentDetails.state}</td>
          <td>{studentDetails.hostelStatus}</td>
          <td>{studentDetails.bloodGroup}</td>
        </tr>
      </tbody>
      <thead>
        <tr>
        <th>Date of Birth</th>
          <th>Studied Year</th>
          <th>Class Last Studied</th>
          <th>Class To Be Admitted</th>
          <th>Name of School</th>
          <th>Parent Occupation</th>
          <th>Remarks One</th>
          <th>Remarks Two</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>{studentDetails.dateOfBirth}</td>
          <td>{studentDetails.studiedYear}</td>
          <td>{studentDetails.classLastStudied}</td>
          <td>{studentDetails.classToBeAdmitted}</td>
          <td>{studentDetails.nameOfSchool}</td>
          <td>{studentDetails.parentOccupation}</td>
          <td>{studentDetails.remarksOne}</td>
          <td>{studentDetails.remarksTwo}</td>
         
        </tr>
      </tbody>
    </table>
  </div>
)}

    </div>
    </div>
  );
};

export default StudentDetails;
