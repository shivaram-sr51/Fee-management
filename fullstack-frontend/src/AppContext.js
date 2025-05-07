import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [standards] = useState(["1st", "2nd", "3rd", "4th", "5th"]);
  const [feeHeads, setFeeHeads] = useState([]);
  const [filteredFeeHeads, setFilteredFeeHeads] = useState([]);
  const [newFeeHead, setNewFeeHead] = useState({
    name: "",
    amount: "",
    standard: "",
  });
  const [students, setStudents] = useState({
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
  const [selectedStandard, setSelectedStandard] = useState("");
  const [studentDetails, setStudentDetails] = useState(null);
  const [paymentAmount, setPaymentAmount] = useState("");
  const [fixedFee, setFixedFee] = useState(0);

  useEffect(() => {
    fetchFeeHeads();
  }, []);

  const fetchFeeHeads = () => {
    axios
      .get("http://localhost:8080/api/feeheads")
      .then((response) => setFeeHeads(response.data))
      .catch((error) => console.error(error));
  };

  const handleFeeHeadSubmit = () => {
    axios
      .post("http://localhost:8080/api/feeheads", newFeeHead)
      .then(() => {
        fetchFeeHeads();
        setNewFeeHead({ name: "", amount: "", standard: "" });
      })
      .catch((error) => console.error(error));
  };

  const handleStandardChange = (standard) => {
    setSelectedStandard(standard);
    setStudents({ ...students, standard, selectedFeeHeads: [] });
    setFilteredFeeHeads(
      feeHeads.filter((feeHead) => feeHead.standard === standard)
    );
  };

  const handleFeeHeadSelection = (feeHeadId, amount) => {
    const updatedSelection = [...students.selectedFeeHeads];
    if (updatedSelection.includes(feeHeadId)) {
      const index = updatedSelection.indexOf(feeHeadId);
      updatedSelection.splice(index, 1);
      setFixedFee(fixedFee - amount);
    } else {
      updatedSelection.push(feeHeadId);
      setFixedFee(fixedFee + amount);
    }
    setStudents({ ...students, selectedFeeHeads: updatedSelection });
  };

  const handleStudentRegistration = () => {
    const studentData = { ...students, fixedFee };
    axios
      .post("http://localhost:8080/api/students", studentData)
      .then(() => {
        setStudents({
          name: "",
          dateOfBirth: "",
          standard: "",
          address: "",
          selectedFeeHeads: [],
          fathersName: "",
          fixedFee: "",
          totalFeePaid: "",
          registerNumber: "",
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
        setFixedFee(0);
      })
      .catch((error) => console.error(error));
  };

  const loadStudentDetails = (name) => {
    axios
      .get(`http://localhost:8080/api/students/${name}`)
      .then((response) => setStudentDetails(response.data))
      .catch((error) => console.error(error));
  };

  const handleFeePayment = () => {
    axios
      .post(
        `http://localhost:8080/api/students/${studentDetails.id}/pay`,
        null,
        {
          params: { amount: paymentAmount },
        }
      )
      .then(() => {
        setPaymentAmount("");
        loadStudentDetails(studentDetails.name); // Refresh student data after payment
      })
      .catch((error) => console.error(error));
  };

  // Function to handle loading fee payment details for a student
  const loadFeePaymentDetails = (name) => {
    axios
      .get(`http://localhost:8080/api/feepayments/${name}`)
      .then((response) => setStudentDetails(response.data))
      .catch((error) => console.error(error));
  };

  return (
    <AppContext.Provider
      value={{
        standards,
        feeHeads,
        filteredFeeHeads,
        newFeeHead,
        students,
        selectedStandard,
        studentDetails,
        paymentAmount,
        fixedFee,
        setNewFeeHead,
        setStudents,
        setPaymentAmount,
        handleFeeHeadSubmit,
        handleStandardChange,
        handleFeeHeadSelection,
        handleStudentRegistration,
        loadStudentDetails,
        handleFeePayment,
        loadFeePaymentDetails, // Pass the function here for use in components
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
