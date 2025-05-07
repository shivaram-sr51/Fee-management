import React from "react";
import { useNavigate } from "react-router-dom";
import FeeHead from "../assets/FeeHead.png";
import StudentRegister from "../assets/RegisterStudent.png";
import FeePay from "../assets/FeePayment.png";
import StudentDet from "../assets/StudentDetail.png";
import EditFee from "../assets/EditFeeHead.png";
import EditStudent from "../assets/EditStudent.png";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Admione() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <center><h1>Welcome Admin</h1></center>
        <Link className="btn btn-light" id="goback1" to="/dashboard">
                            Go Back
                          </Link>

        <div className="Adminbox">

          <div className="navbar">
            
            <div className="project-name"></div>
            
            <div className="Admin-sub-navbar">

                        <p
                          className="Admin-Admin"
                          onClick={() => navigate("/Admindashboard")}
                          style={{ cursor: "pointer" }}
                        >
                          <img className="Admin-sub-navbar-one " src={FeeHead}></img>
                          <p style={{ marginLeft: "20px" }}>Fee Head Setup</p>
                        </p>


                        <p
                          className="Admin-Admin"
                          onClick={() => navigate("/Admindashboardone")}
                          style={{ cursor: "pointer" }}
                        >
                          <img
                            className="Admin-sub-navbar-one "
                            src={StudentRegister}
                          ></img>
                          <p style={{ marginLeft: "30px" }}>Register Student</p>
                        </p>


                        <p
                          className="Admin-Admin"
                          onClick={() => navigate("/AdminTwo")}
                          style={{ cursor: "pointer" }}
                        >
                          <img className="Admin-sub-navbar-one " src={FeePay}></img>
                          <p style={{ marginLeft: "50px" }}>Fee Payment</p>
                        </p>


                        <p
                          className="Admin-Admin"
                          onClick={() => navigate("/AdminThree")}
                          style={{ cursor: "pointer" }}
                        >
                          <img className="Admin-sub-navbar-one " src={StudentDet}></img>
                          <p style={{ marginLeft: "25px" }}>Student Details</p>
                        </p>


                        <p
                          className="Admin-Admin"
                          onClick={() => navigate("/FourAdmin")}
                          style={{ cursor: "pointer" }}
                        >
                          <img className="Admin-sub-navbar-one " src={EditFee}></img>
                          <p style={{ marginLeft: "29px" }}>Edit Fee Head</p>
                        </p>


                        <p
                          className="Admin-Admin"
                          onClick={() => navigate("/FiveAdmin")}
                          style={{ cursor: "pointer" }}
                        >
                          <img className="Admin-sub-navbar-one " src={EditStudent}></img>
                          <p style={{ marginLeft: "20px" }}>Edit Student Detail</p>
                        </p>


            </div>
          </div>
        </div>
      </div>
    </>
  );
}
