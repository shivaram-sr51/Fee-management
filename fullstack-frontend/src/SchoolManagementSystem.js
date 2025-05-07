// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const SchoolManagementSystem = () => {
//     const [standards] = useState(["1", "2", "3", "4", "5"]);
//     const [feeHeads, setFeeHeads] = useState([]);
//     const [filteredFeeHeads, setFilteredFeeHeads] = useState([]);
//     const [newFeeHead, setNewFeeHead] = useState({ name: "", amount: "", standard: "" });
//     const [students, setStudents] = useState({ name: "", dateOfBirth: "", standard: "", address: "", selectedFeeHeads: [] });
//     const [selectedStandard, setSelectedStandard] = useState("");
//     const [studentDetails, setStudentDetails] = useState(null);
//     const [paymentAmount, setPaymentAmount] = useState("");
//     const [fixedFee, setFixedFee] = useState(0);

//     useEffect(() => {
//         fetchFeeHeads();
//     }, []);

//     const fetchFeeHeads = () => {
//         axios.get("http://localhost:8080/api/feeheads")
//             .then((response) => setFeeHeads(response.data))
//             .catch((error) => console.error(error));
//     };

//     const handleFeeHeadSubmit = () => {
//         axios.post("http://localhost:8080/api/feeheads", newFeeHead)
//             .then(() => {
//                 fetchFeeHeads();
//                 alert("Fee Head Added!");
//                 setNewFeeHead({ name: "", amount: "", standard: "" }); // Reset form
//             })
//             .catch((error) => console.error(error));
//     };

//     const handleStandardChange = (standard) => {
//         setSelectedStandard(standard);
//         setStudents({ ...students, standard, selectedFeeHeads: [] });
//         setFilteredFeeHeads(feeHeads.filter((feeHead) => feeHead.standard === standard));
//     };

//     const handleFeeHeadSelection = (feeHeadId, amount) => {
//         const updatedSelection = [...students.selectedFeeHeads];
//         if (updatedSelection.includes(feeHeadId)) {
//             const index = updatedSelection.indexOf(feeHeadId);
//             updatedSelection.splice(index, 1);
//             setFixedFee(fixedFee - amount);
//         } else {
//             updatedSelection.push(feeHeadId);
//             setFixedFee(fixedFee + amount);
//         }
//         setStudents({ ...students, selectedFeeHeads: updatedSelection });
//     };

//     const handleStudentRegistration = () => {
//         const studentData = { ...students, fixedFee };
//         axios.post("http://localhost:8080/api/students", studentData)
//             .then(() => {
//                 alert("Student Registered Successfully");
//                 setStudents({ name: "", dateOfBirth: "", standard: "", address: "", selectedFeeHeads: [] });
//                 setFixedFee(0);
//             })
//             .catch((error) => console.error(error));
//     };

//     const loadStudentDetails = (name) => {
//         axios.get(`http://localhost:8080/api/students/${name}`)
//             .then((response) => setStudentDetails(response.data))
//             .catch((error) => console.error(error));
//     };

//     const handleFeePayment = () => {
//         axios.post(`http://localhost:8080/api/students/${studentDetails.id}/pay`, null, {
//             params: { amount: paymentAmount }
//         })
//             .then(() => {
//                 alert("Fee Paid Successfully!");
//                 setPaymentAmount("");
//                 loadStudentDetails(studentDetails.name);
//             })
//             .catch((error) => console.error(error));
//     };

//     return (
//         <div>
//             <h1>School Management System</h1>

//             {/* Fee Head Setup */}
//             <div>
//                 <h2>Fee Head Setup</h2>
//                 <input
//                     type="text"
//                     placeholder="Fee Head Name"
//                     value={newFeeHead.name}
//                     onChange={(e) => setNewFeeHead({ ...newFeeHead, name: e.target.value })}
//                 />
//                 <input
//                     type="number"
//                     placeholder="Amount"
//                     value={newFeeHead.amount}
//                     onChange={(e) => setNewFeeHead({ ...newFeeHead, amount: e.target.value })}
//                 />
//                 <select
//                     value={newFeeHead.standard}
//                     onChange={(e) => setNewFeeHead({ ...newFeeHead, standard: e.target.value })}
//                 >
//                     <option value="">Select Standard</option>
//                     {standards.map((std) => (
//                         <option key={std} value={std}>
//                             {std}
//                         </option>
//                     ))}
//                 </select>
//                 <button onClick={handleFeeHeadSubmit}>Add Fee Head</button>

//                 {/* Show fee heads for the selected standard */}
//                 {selectedStandard && (
//                     <div>
//                         <h3>Fee Heads for Standard {selectedStandard}</h3>
//                         <ul>
//                             {filteredFeeHeads.map((feeHead) => (
//                                 <li key={feeHead.id}>
//                                     {feeHead.name} - ₹{feeHead.amount}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 )}
//             </div>

//             {/* Student Registration */}
//             <div>
//                 <h2>Student Registration</h2>
//                 <input
//                     type="text"
//                     placeholder="Name"
//                     value={students.name}
//                     onChange={(e) => setStudents({ ...students, name: e.target.value })}
//                 />
//                 <input
//                     type="date"
//                     value={students.dateOfBirth}
//                     onChange={(e) => setStudents({ ...students, dateOfBirth: e.target.value })}
//                 />
//                 <select
//                     value={students.standard}
//                     onChange={(e) => handleStandardChange(e.target.value)}
//                 >
//                     <option value="">Select Standard</option>
//                     {standards.map((std) => (
//                         <option key={std} value={std}>
//                             {std}
//                         </option>
//                     ))}
//                 </select>
//                 <input
//                     type="text"
//                     placeholder="Address"
//                     value={students.address}
//                     onChange={(e) => setStudents({ ...students, address: e.target.value })}
//                 />

//                 <h3>Select Fee Heads for Standard {selectedStandard}</h3>
//                 {filteredFeeHeads.map((feeHead) => (
//                     <div key={feeHead.id}>
//                         <input
//                             type="checkbox"
//                             checked={students.selectedFeeHeads.includes(feeHead.id)}
//                             onChange={() => handleFeeHeadSelection(feeHead.id, feeHead.amount)}
//                         />
//                         {feeHead.name} - ₹{feeHead.amount}
//                     </div>
//                 ))}

//                 <p>Fixed Fee: ₹{fixedFee}</p>
//                 <button onClick={handleStudentRegistration}>Register Student</button>
//             </div>

//             {/* Fee Payment */}
//             <div>
//                 <h2>Fee Payment</h2>
//                 <input
//                     type="text"
//                     placeholder="Enter Student Name"
//                     onChange={(e) => loadStudentDetails(e.target.value)}
//                 />
//                 {studentDetails && (
//                     <div>
//                         <h3>Student Details</h3>
//                         <p>Name: {studentDetails.name}</p>
//                         <p>Standard: {studentDetails.standard}</p>
//                         <p>Fixed Fee: ₹{studentDetails.fixedFee}</p>
//                         <p>Paid Fee: ₹{studentDetails.totalFeePaid}</p>
//                         <p>Due Fee: ₹{studentDetails.fixedFee - studentDetails.totalFeePaid}</p>
//                         <input
//                             type="number"
//                             placeholder="Enter Payment Amount"
//                             value={paymentAmount}
//                             onChange={(e) => setPaymentAmount(e.target.value)}
//                         />
//                         <button onClick={handleFeePayment}>Pay Fee</button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default SchoolManagementSystem;
