import React from "react";
import logo from "./logo.svg";
import "./App.css";

import SchoolRegister from "./screens/SchoolRegister/SchoolRegister";
import { Route, Routes } from "react-router-dom";
import SchoolLogin from "./screens/SchoolLogin/SchoolLogin";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import StaffLogin from "./screens/LoginScreen/StaffLogin";
import StaffRegister from "./screens/RegisterScreen/StaffRegister";
import SelectResultCheck from "./screens/CheckResultScreen/SelectResultCheck";
import ResultChecker from "./screens/CheckResultScreen/ResultChecker";
import CommutativeResultChecker from "./screens/CheckResultScreen/CommutativeResultChecker";
import { MyResult } from "./screens/CheckResultScreen/MyResult";

import AdminDashboard from "./admin/AdminDashboard/AdminDashboard";
import AdminCreateClass from "./admin/AdminClasses/AdminCreateClass";
import RegisterStudent from "./admin/AdminStudents/RegisterStudent";
import AdminCreateSubject from "./admin/AdminSubjects/AdminCreateSubject";
import AdminSubjectScore from "./admin/AdminSubjectScore/AdminSubjectScore";
import StudentSubjectScores from "./admin/AdminSubjectScore/StudentSubjectScores";
import AdminCreateResult from "./admin/AdminResult/AdminCreateResult";
import CreateStudentResult from "./admin/AdminResult/CreateStudentResult";
import LandingPage from "./screens/LandingPage";

function App() {
  return (
    <>
      <Routes>
        {/* home route */}
        <Route path="/" element={<SchoolLogin />} />
        <Route path="/home" element={<LandingPage />} />
        {/* home route */}
        {/* school route */}
        <Route path="/RegisterSchool" element={<SchoolRegister />} />
        {/* school route */}
        {/* user routes */}
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/staff-login" element={<StaffLogin />} />
        <Route path="/staff-register" element={<StaffRegister />} />
        {/* user route */}
        {/* check result routes */}
        <Route path="/check-result" element={<SelectResultCheck />} />
        <Route path="/Result-check" element={<ResultChecker />} />
        <Route
          path="/my-result/:selectedSchool/:selectedClass/:userId/:selectedYear/:selectedTerm"
          element={<MyResult />}
        />
        {/* check result routes */}
        {/* commutative result */}
        <Route
          path="/commutative-Result-check"
          element={<CommutativeResultChecker />}
        />
        {/* commutative result */}
        {/* Admin */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/register-student" element={<RegisterStudent />} />
        <Route path="/create-class" element={<AdminCreateClass />} />
        <Route path="/create-subject" element={<AdminCreateSubject />} />
        <Route path="/subject-score" element={<AdminSubjectScore />} />
        <Route
          path="/student-subject-score/:id/:selectedClass/:selectedSchool"
          element={<StudentSubjectScores />}
        />
        <Route path="/create-result" element={<AdminCreateResult />} />
        <Route
          path="/student-result-create/:id/:selectedClass/:selectedSchool"
          element={<CreateStudentResult />}
        />
        {/* Admin */}
      </Routes>
    </>
  );
}

export default App;
