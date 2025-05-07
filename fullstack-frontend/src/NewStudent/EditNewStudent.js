import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function EditNewStudent() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [NewEditStudent, setNewEditStudent] = useState({
    name: "",
    dateOfBirth: "",
    standard: "",
    address: "",
    selectedFeeHeads: [],
    fathersName: "",
    registerNumber: "",
    fixedFee: "",
    totalFeePaid: "",
    guardianName: "",
    placePincode: "",
    district: "",
    phone: "",
    busPlaceName: "",
    busRouteNo: "",
    section: "",
    gender: "",
    caste: "",
    community: "",
    nationality: "",
    religion: "",
    motherTongue: "",
    state: "",
    hostelStatus: "",
    bloodGroup: "",
    studiedYear: "",
    classLastStudied: "",
    classToBeAdmitted: "",
    nameOfSchool: "",
    parentOccupation: "",
    remarksOne: "",
    remarksTwo: "",
  });

  const {
    name,
    dateOfBirth,
    standard,
    address,
    phone,
    fathersName,
    registerNumber,
    selectedFeeHeads,
    fixedFee,
    totalFeePaid,
    guardianName,
    placePincode,
    district,
    busPlaceName,
    busRouteNo,
    section,
    gender,
    caste,
    community,
    nationality,
    religion,
    motherTongue,
    state,
    hostelStatus,
    bloodGroup,
    studiedYear,
    classLastStudied,
    classToBeAdmitted,
    nameOfSchool,
    parentOccupation,
    remarksOne,
    remarksTwo,
  } = NewEditStudent; // Destructure for commonly used fields

  function onInputChange(e) {
    setNewEditStudent({
      ...NewEditStudent,
      [e.target.name]: e.target.value,
    });
  }

  useEffect(() => {
    const LoadNewEditStudent = async () => {
      try {
        const result = await axios.get(
          `http://localhost:8080/NewStudent/${id}`
        );
        setNewEditStudent(result.data);
      } catch (error) {
        console.error("Error loading student data:", error);
        // Optionally show an error notification
      }
    };
    LoadNewEditStudent();
  }, [id]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!registerNumber || !name) {
      alert("Please fill in required fields (Register Number, Name).");
      return;
    }
    try {
      await axios.put(`http://localhost:8080/NewStudent/${id}`, NewEditStudent);
      navigate("/FiveAdmin");
    } catch (error) {
      console.error("Error updating student data:", error);
      // Optionally show an error notification
    }
  };

  return (
    <div className="row">
      <div className="Edit-box">
        <h2 className="text-center m-4">Edit Student</h2>

        <form className="Edit-box" onSubmit={onSubmit}>
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                    name="name"
                    value={name}
                    onChange={onInputChange}
                  />
                </td>
                <td>
                  <label htmlFor="dateOfBirth" className="form-label">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    name="dateOfBirth"
                    value={dateOfBirth}
                    onChange={onInputChange}
                  />
                </td>
                <td>
                  <label htmlFor="standard" className="form-label">
                    Standard
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Standard"
                    name="standard"
                    value={standard}
                    onChange={onInputChange}
                  />
                </td>
                <td>
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Address"
                    name="address"
                    value={address}
                    onChange={onInputChange}
                  />
                </td>
                <td>
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter Phone"
                    name="phone"
                    value={phone}
                    onChange={onInputChange}
                  />
                </td>
                <td>
                  <label htmlFor="fathersName" className="form-label">
                    Father's Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Father's Name"
                    name="fathersName"
                    value={fathersName}
                    onChange={onInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="registerNumber" className="form-label">
                    Register Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Register Number"
                    name="registerNumber"
                    value={registerNumber}
                    onChange={onInputChange}
                  />
                </td>
                <td>
                  <label htmlFor="selectedFeeHeads" className="form-label">
                    Selected Fee Heads
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Selected Fee Heads"
                    name="selectedFeeHeads"
                    value={selectedFeeHeads}
                    onChange={onInputChange}
                  />
                </td>
                <td>
                  <label htmlFor="fixedFee" className="form-label">
                    Fixed Fee
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Fixed Fee"
                    name="fixedFee"
                    value={fixedFee}
                    onChange={onInputChange}
                  />
                </td>
                <td>
                  <label htmlFor="totalFeePaid" className="form-label">
                    Total Fee Paid
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Total Fee Paid"
                    name="totalFeePaid"
                    value={totalFeePaid}
                    onChange={onInputChange}
                  />
                </td>
                <td>
                  <label htmlFor="guardianName" className="form-label">
                    Guardian Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Guardian Name"
                    name="guardianName"
                    value={guardianName}
                    onChange={onInputChange}
                  />
                </td>
                <td>
                  <label htmlFor="placePincode" className="form-label">
                    Place Pincode
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Place Pincode"
                    name="placePincode"
                    value={placePincode}
                    onChange={onInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="district" className="form-label">
                    District
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter District"
                    name="district"
                    value={district}
                    onChange={onInputChange}
                  />
                </td>
                <td>
                  <label htmlFor="busPlaceName" className="form-label">
                    Bus Place Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Bus Place Name"
                    name="busPlaceName"
                    value={busPlaceName}
                    onChange={onInputChange}
                  />
                </td>
                <td>
                  <label htmlFor="busRouteNo" className="form-label">
                    Bus Route Number
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Bus Route Number"
                    name="busRouteNo"
                    value={busRouteNo}
                    onChange={onInputChange}
                  />
                </td>
                <td>
                  <label htmlFor="section" className="form-label">
                    Section
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Section"
                    name="section"
                    value={section}
                    onChange={onInputChange}
                  />
                </td>
                <td>
                  <label htmlFor="gender" className="form-label">
                    Gender
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Gender"
                    name="gender"
                    value={gender}
                    onChange={onInputChange}
                  />
                </td>
                <td>
                  <label htmlFor="caste" className="form-label">
                    Caste
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Caste"
                    name="caste"
                    value={caste}
                    onChange={onInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="community" className="form-label">
                    Community
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Community"
                    name="community"
                    value={community}
                    onChange={onInputChange}
                  />
                </td>
                <td>
                  <label htmlFor="nationality" className="form-label">
                    Nationality
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Nationality"
                    name="nationality"
                    value={nationality}
                    onChange={onInputChange}
                  />
                </td>
                <td>
                  <label htmlFor="religion" className="form-label">
                    Religion
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Religion"
                    name="religion"
                    value={religion}
                    onChange={onInputChange}
                  />
                </td>
                <td>
                  <label htmlFor="motherTongue" className="form-label">
                    Mother Tongue
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Mother Tongue"
                    name="motherTongue"
                    value={motherTongue}
                    onChange={onInputChange}
                  />
                </td>
                <td>
                  <label htmlFor="state" className="form-label">
                    State
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter State"
                    name="state"
                    value={state}
                    onChange={onInputChange}
                  />
                </td>
                <td>
                  <label htmlFor="hostelStatus" className="form-label">
                    Hostel Status
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Hostel Status"
                    name="hostelStatus"
                    value={hostelStatus}
                    onChange={onInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="bloodGroup" className="form-label">
                    Blood Group
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Blood Group"
                    name="bloodGroup"
                    value={bloodGroup}
                    onChange={onInputChange}
                  />
                </td>
                <td>
                  <label htmlFor="studiedYear" className="form-label">
                    Studied Year
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Studied Year"
                    name="studiedYear"
                    value={studiedYear}
                    onChange={onInputChange}
                  />
                </td>
                <td>
                  <label htmlFor="classLastStudied" className="form-label">
                    Class Last Studied
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Class Last Studied"
                    name="classLastStudied"
                    value={classLastStudied}
                    onChange={onInputChange}
                  />
                </td>
                <td>
                  <label htmlFor="classToBeAdmitted" className="form-label">
                    Class to Be Admitted
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Class to Be Admitted"
                    name="classToBeAdmitted"
                    value={classToBeAdmitted}
                    onChange={onInputChange}
                  />
                </td>
                <td>
                  <label htmlFor="nameOfSchool" className="form-label">
                    Name of School
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name of School"
                    name="nameOfSchool"
                    value={nameOfSchool}
                    onChange={onInputChange}
                  />
                </td>
                <td>
                  <label htmlFor="parentOccupation" className="form-label">
                    Parent Occupation
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Parent Occupation"
                    name="parentOccupation"
                    value={parentOccupation}
                    onChange={onInputChange}
                  />
                </td>
              </tr>
            </tbody>
          </table>

          {/* Submit and Cancel Buttons */}
          <div className="side">
            {" "}
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/FiveAdmin">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
