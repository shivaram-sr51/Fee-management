// StudentRegistration.js
import React, { useContext } from "react";
import { AppContext } from "../AppContext"; // Adjust the import path as necessary
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toast notifications

const StudentRegistration = () => {
  const {
    standards,
    students,
    setStudents,
    handleStandardChange,
    handleFeeHeadSelection,
    filteredFeeHeads,
    selectedStandard,
    fixedFee,
    handleStudentRegistration,
  } = useContext(AppContext);

  const handleSubmitWithToast = () => {
    // Check if required fields are filled
    if (!students.name || !students.registerNumber) {
      toast.error("Please fill out all fields before submitting!");
      return;
    }

    // Call the context function to handle student registration
    handleStudentRegistration();
    toast.success("Student Registered Successfully!"); // Show success toast
  };

  return (
    <div className="student-reg">
      <ToastContainer /> {/* Add ToastContainer here */}
      {/* <Link className="btn btn-outline-danger mx-2" to="/FP">
      FeePayment
    </Link>
    <h2>Student Registration</h2> */}
      <input
        type="text"
        placeholder="Name"
        value={students.name}
        onChange={(e) => setStudents({ ...students, name: e.target.value })}
        className="inp"
      />
      <input
        type="text"
        placeholder="FathersName"
        value={students.fathersName}
        onChange={(e) =>
          setStudents({ ...students, fathersName: e.target.value })
        }
        className="inp"
      />
      <input
        type="text"
        placeholder="registerNumber"
        value={students.registerNumber}
        onChange={(e) =>
          setStudents({ ...students, registerNumber: e.target.value })
        }
        className="inp"
      />
      <input
        type="date"
        value={students.dateOfBirth}
        onChange={(e) =>
          setStudents({ ...students, dateOfBirth: e.target.value })
        }
        className="inp"
        title="Date of Birth" // Tooltip text will appear on hover
      />
      <select
        value={students.standard}
        onChange={(e) => handleStandardChange(e.target.value)}
        className="inp"
      >
        <option value="">Select Standard</option>
        {standards.map((std) => (
          <option key={std} value={std}>
            {std}
          </option>
        ))}
      </select>
      <input
        className="inp"
        type="text"
        placeholder="Address"
        value={students.address}
        onChange={(e) => setStudents({ ...students, address: e.target.value })}
      />
      <input
        className="inp"
        type="text"
        list="guardianNames"
        placeholder="Guardian Name"
        value={students.guardianName}
        onChange={(e) =>
          setStudents({ ...students, guardianName: e.target.value })
        }
      />
      <datalist id="guardianNames">
        <option value="No" />
      </datalist>
      <input
        className="inp"
        type="text"
        placeholder="Place Pincode"
        value={students.placePincode}
        onChange={(e) =>
          setStudents({ ...students, placePincode: e.target.value })
        }
      />
      <select
        className="inp"
        value={students.district}
        onChange={(e) => setStudents({ ...students, district: e.target.value })}
      >
        <option value="">Select District</option>
        <option value="Ariyalur">Ariyalur</option>
        <option value="Chennai">Chennai</option>
        <option value="Coimbatore">Coimbatore</option>
        <option value="Cuddalore">Cuddalore</option>
        <option value="Dharmapuri">Dharmapuri</option>
        <option value="Dindigul">Dindigul</option>
        <option value="Erode">Erode</option>
        <option value="Kanchipuram">Kanchipuram</option>
        <option value="Kanyakumari">Kanyakumari</option>
        <option value="Karur">Karur</option>
        <option value="Krishnagiri">Krishnagiri</option>
        <option value="Madurai">Madurai</option>
        <option value="Nagapattinam">Nagapattinam</option>
        <option value="Namakkal">Namakkal</option>
        <option value="Perambalur">Perambalur</option>
        <option value="Pudukkottai">Pudukkottai</option>
        <option value="Ramanathapuram">Ramanathapuram</option>
        <option value="Salem">Salem</option>
        <option value="Sivagangai">Sivagangai</option>
        <option value="Tenkasi">Tenkasi</option>
        <option value="Thanjavur">Thanjavur</option>
        <option value="Thoothukudi">Thoothukudi</option>
        <option value="Tiruvallur">Tiruvallur</option>
        <option value="Tirunelveli">Tirunelveli</option>
        <option value="Tirupattur">Tirupattur</option>
        <option value="Tiruchirappalli">Tiruchirappalli</option>
        <option value="Tiruvannamalai">Tiruvannamalai</option>
        <option value="Vellore">Vellore</option>
        <option value="Viluppuram">Viluppuram</option>
        <option value="Virudhunagar">Virudhunagar</option>
      </select>
      <input
        className="inp"
        type="text"
        placeholder="Phone"
        value={students.phone}
        onChange={(e) => setStudents({ ...students, phone: e.target.value })}
      />
      <input
        className="inp"
        type="text"
        placeholder="Bus Place Name"
        value={students.busPlaceName}
        onChange={(e) =>
          setStudents({ ...students, busPlaceName: e.target.value })
        }
      />
      <input
        className="inp"
        type="text"
        placeholder="Bus Route No"
        value={students.busRouteNo}
        onChange={(e) =>
          setStudents({ ...students, busRouteNo: e.target.value })
        }
      />
      <select
        className="inp"
        value={students.section}
        onChange={(e) => setStudents({ ...students, section: e.target.value })}
      >
        <option value="">Select Section</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
      <select
        className="inp"
        value={students.gender}
        onChange={(e) => setStudents({ ...students, gender: e.target.value })}
      >
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <select
        className="inp"
        value={students.caste}
        onChange={(e) => setStudents({ ...students, caste: e.target.value })}
      >
        <option value="">Select Caste</option>
        <option value="Adi Dravida">Adi Dravida</option>
        <option value="Arunthathiyar">Arunthathiyar</option>
        <option value="Backwards Class">Backwards Class</option>
        <option value="Chettiar">Chettiar</option>
        <option value="Dalit">Dalit</option>
        <option value="Gounder">Gounder</option>
        <option value="Iyengar">Iyengar</option>
        <option value="Iyer">Iyer</option>
        <option value="Kallar">Kallar</option>
        <option value="Muthuraja">Muthuraja</option>
        <option value="Nadar">Nadar</option>
        <option value="Nayakar">Nayakar</option>
        <option value="Pallar">Pallar</option>
        <option value="Reddy">Reddy</option>
        <option value="Vanniyar">Vanniyar</option>
        <option value="Vokkaliga">Vokkaliga</option>
      </select>
      <select
        className="inp"
        value={students.state}
        onChange={(e) => setStudents({ ...students, state: e.target.value })}
      >
        <option value="">Select State</option>
        <option value="Andhra Pradesh">Andhra Pradesh</option>
        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
        <option value="Assam">Assam</option>
        <option value="Bihar">Bihar</option>
        <option value="Chhattisgarh">Chhattisgarh</option>
        <option value="Goa">Goa</option>
        <option value="Gujarat">Gujarat</option>
        <option value="Haryana">Haryana</option>
        <option value="Himachal Pradesh">Himachal Pradesh</option>
        <option value="Jharkhand">Jharkhand</option>
        <option value="Karnataka">Karnataka</option>
        <option value="Kerala">Kerala</option>
        <option value="Madhya Pradesh">Madhya Pradesh</option>
        <option value="Maharashtra">Maharashtra</option>
        <option value="Manipur">Manipur</option>
        <option value="Meghalaya">Meghalaya</option>
        <option value="Mizoram">Mizoram</option>
        <option value="Nagaland">Nagaland</option>
        <option value="Odisha">Odisha</option>
        <option value="Punjab">Punjab</option>
        <option value="Rajasthan">Rajasthan</option>
        <option value="Sikkim">Sikkim</option>
        <option value="Tamil Nadu">Tamil Nadu</option>
        <option value="Telangana">Telangana</option>
        <option value="Uttar Pradesh">Uttar Pradesh</option>
        <option value="Uttarakhand">Uttarakhand</option>
        <option value="West Bengal">West Bengal</option>
        {/* <option value="Andaman and Nicobar Islands">
        Andaman and Nicobar Islands
      </option> */}
        <option value="Chandigarh">Chandigarh</option>
        {/* <option value="Dadra and Nagar Haveli and Daman and Diu">
        Dadra and Nagar Haveli and Daman and Diu
      </option> */}
        <option value="Lakshadweep">Lakshadweep</option>
        <option value="Delhi">Delhi</option>
        <option value="Puducherry">Puducherry</option>
        <option value="Ladakh">Ladakh</option>
        <option value="Lakshadweep">Lakshadweep</option>
      </select>
      <select
        value={students.community}
        onChange={(e) =>
          setStudents({ ...students, community: e.target.value })
        }
        className="inp"
      >
        <option value="">Select Community</option>
        <option value="MBC">MBC (Most Backward Class)</option>
        <option value="BC">BC (Backward Class)</option>
        <option value="SC">SC (Scheduled Caste)</option>
        <option value="ST">ST (Scheduled Tribe)</option>
        <option value="OBC">OBC (Other Backward Classes)</option>
        <option value="OC">OC (Other Classes)</option>
      </select>
      <select
        className="inp"
        value={students.nationality}
        onChange={(e) =>
          setStudents({ ...students, nationality: e.target.value })
        }
      >
        <option value="">Select Nationality</option>
        <option value="Indian">Indian</option>
        <option value="American">American</option>
        <option value="Canadian">Canadian</option>
        <option value="Australian">Australian</option>
        <option value="British">British</option>
        <option value="German">German</option>
        <option value="French">French</option>
        <option value="Japanese">Japanese</option>
        <option value="Chinese">Chinese</option>
        <option value="Russian">Russian</option>
        <option value="South African">South African</option>
        <option value="Brazilian">Brazilian</option>
        <option value="Mexican">Mexican</option>
      </select>
      <select
        className="inp"
        value={students.religion}
        onChange={(e) => setStudents({ ...students, religion: e.target.value })}
      >
        <option value="">Select Religion</option>
        <option value="Hindu">Hindu</option>
        <option value="Muslim">Muslim</option>
        <option value="Christian">Christian</option>
        <option value="Sikh">Sikh</option>
        <option value="Buddhist">Buddhist</option>
        <option value="Jain">Jain</option>
        <option value="Zoroastrian">Zoroastrian</option>
        <option value="Jewish">Jewish</option>
        <option value="Bahá'í">Bahá'í</option>
        <option value="Other">Other</option>
      </select>
      <select
        value={students.motherTongue}
        onChange={(e) =>
          setStudents({ ...students, motherTongue: e.target.value })
        }
        className="inp"
      >
        <option value="">Select Mother Tongue</option>
        <option value="Tamil">Tamil</option>
        <option value="Hindi">Hindi</option>
        <option value="Telugu">Telugu</option>
        <option value="Kannada">Kannada</option>
        <option value="Malayalam">Malayalam</option>
        <option value="Marathi">Marathi</option>
        <option value="Punjabi">Punjabi</option>
        <option value="Gujarati">Gujarati</option>
        <option value="Bengali">Bengali</option>
        <option value="Odia">Odia</option>
        <option value="Urdu">Urdu</option>
        <option value="English">English</option>
        <option value="Other">Other</option>
      </select>
      <select
        className="inp"
        value={students.hostelStatus}
        onChange={(e) =>
          setStudents({ ...students, hostelStatus: e.target.value })
        }
      >
        <option value="">Select Hostel Status</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      <select
        className="inp"
        value={students.bloodGroup}
        onChange={(e) =>
          setStudents({ ...students, bloodGroup: e.target.value })
        }
      >
        <option value="">Select Blood Group</option>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
        <option value="RhD Negative">RhD Negative</option>
        <option value="Other">Other</option>
      </select>
      <input
        className="inp"
        type="number"
        placeholder="Studied Year"
        value={students.studiedYear}
        onChange={(e) =>
          setStudents({ ...students, studiedYear: e.target.value })
        }
        min="1900" // Min year
        max="2100" // Max year
      />
      <select
        className="inp"
        value={students.classLastStudied}
        onChange={(e) =>
          setStudents({ ...students, classLastStudied: e.target.value })
        }
      >
        <option value="">Select Class Last Studied</option>
        <option value="No">No</option>
        <option value="1st">1st</option>
        <option value="2nd">2nd</option>
        <option value="3rd">3rd</option>
        <option value="4th">4th</option>
        <option value="5th">5th</option>
      </select>
      <select
        className="inp"
        value={students.classToBeAdmitted}
        onChange={(e) =>
          setStudents({ ...students, classToBeAdmitted: e.target.value })
        }
      >
        <option value="">Select Class to Be Admitted</option>
        <option value="No">No</option>
        <option value="1st">1st</option>
        <option value="2nd">2nd</option>
        <option value="3rd">3rd</option>
        <option value="4th">4th</option>
        <option value="5th">5th</option>
      </select>
      <input
        className="inp"
        type="text"
        placeholder="Name of School"
        value={students.nameOfSchool}
        onChange={(e) =>
          setStudents({ ...students, nameOfSchool: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Parent Occupation"
        value={students.parentOccupation}
        onChange={(e) =>
          setStudents({ ...students, parentOccupation: e.target.value })
        }
        className="inp"
      />
      <input
        className="inp"
        type="text"
        placeholder="Remarks One"
        value={students.remarksOne}
        onChange={(e) =>
          setStudents({ ...students, remarksOne: e.target.value })
        }
      />
      <input
        className="inp"
        type="text"
        placeholder="Remarks Two"
        value={students.remarksTwo}
        onChange={(e) =>
          setStudents({ ...students, remarksTwo: e.target.value })
        }
      />
      <button className="buttonn" onClick={handleSubmitWithToast}>
        Register Student
      </button>
     
    </div>
  );
};

export default StudentRegistration;
