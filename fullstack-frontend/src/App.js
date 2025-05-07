// App.js
import React from "react";
import { AppProvider } from "./AppContext"; // Adjust the import path as necessary
import FeeHeadSetup from "./components/FeeHeadSetup";
import StudentRegistration from "./components/StudentRegistration";
import FeePayment from "./components/FeePayment";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import StudentDetails from "./components/StudentDetails";
import Dashboard from "./dashboard/Dashboard";
import Login from "./Authentication/Login";
import  Register from "./Authentication/Register"
import "./style.css"
import { AnimatePresence } from "framer-motion";
import Home from "./NewFeeHead/Home";
import Maindashboard from "./NewFeeHead/Maindashboard";
import EditNewFeeHead from "./NewFeeHead/EditNewFeeHead";
import HomeOne from "./NewStudent/HomeOne";
import MaindashboardOne from "./NewStudent/MaindashboardOne";
import EditNewStudent from "./NewStudent/EditNewStudent";
import Dashboardone from "./dashboard/Dashboardone";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Two from "./dashboard/Two";
import Three from "./dashboard/Three";
import Admione from "./dashboard/Admione";
import Admindashboard from "./dashboard/Admindashboard";
import Admindashboardone from "./dashboard/Admindashboardone";
import AdminTwo from "./dashboard/AdminTwo";
import AdminThree from "./dashboard/AdminThree";
import AdminFour from "./dashboard/AdminFour";
import AdminFive from "./dashboard/AdminFive";
import AdminLogin from "./Authentication/AdminLogin";
import Admin from "./dashboard/Admin";


const App = () => {
  return (
    <>
    <ToastContainer position="top-right" autoClose={3000} />
    <AppProvider>
      {/* <div>
        <h1>School Management System</h1>
        <FeeHeadSetup />
                <StudentRegistration />
                <FeePayment />
      </div> */}

      <BrowserRouter>
      <AnimatePresence mode="wait"> {/* Ensures only one component is visible at a time */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>}></Route>

          <Route path="/" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/AdminLogin" element={<AdminLogin/>}></Route>

          
         
          <Route path="/SR" element={<StudentRegistration />}></Route>

          <Route path="/FP" element={<FeePayment/>}></Route>

          <Route path="/SD" element={<StudentDetails/>}></Route>

          <Route path="/FH" element={<FeeHeadSetup/>}></Route>


                              {/*New*/}


          

          <Route path="/HM" element={<Home/>}></Route>

          <Route path="/MDB" element={<Maindashboard/>}></Route>

          <Route path="/ENFH/:id" element={<EditNewFeeHead/>}></Route>

          <Route path="/HMO" element={<HomeOne/>}></Route>

          <Route path="/MDBO" element={<MaindashboardOne/>}></Route>

          <Route path="/ENS/:id" element={<EditNewStudent/>}></Route>

          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/dashboardone" element={<Dashboardone/>}></Route>

          <Route path="/Two" element={<Two/>}></Route>

          <Route path="/Three" element={<Three/>}></Route>

                            {/*Admin*/}

          <Route path="/Admin" element={<Admin/>}></Route>

          <Route path="/Admindashboard" element={<Admindashboard/>}></Route>

          <Route path="/Admindashboardone" element={<Admindashboardone/>}></Route>

          <Route path="/AdminTwo" element={<AdminTwo/>}></Route>

          <Route path="/AdminThree" element={<AdminThree/>}></Route>

          <Route path="/FourAdmin" element={<AdminFour/>}></Route>
          <Route path="/FiveAdmin" element={<AdminFive/>}></Route>


          


         


        </Routes>
        </AnimatePresence>
      </BrowserRouter>
    </AppProvider>
    </>
  );
};

export default App;
