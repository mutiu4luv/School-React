import React, { useState } from "react";
import AdminLayout from "../AdminDashboard/AdminLayout";
import "./AdminClass.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { schoolInfo } from "../../store/Info";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import CircularIndeterminate from "../../components/Loading/Progress";
import CircularWithValueLabel from "../../components/Loading/LoadingCircle";
const AdminCreateClass = () => {
  const navigate = useNavigate();

  const [schoolName, setSchoolName] = useState(schoolInfo);

  const [name, setName] = useState("");

  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleLoader = () => {
    setLoading(true);

    // Perform any other actions that need to be done when the button is clicked
  };

  //////

  /////
  const submitHandler = (e: any) => {
    e.preventDefault();
    setLoading(true);
    const data: any = {
      schoolName: schoolName,
      name: name,
    };

    const headers: any = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .post("http://localhost:5000/api/Class/", data, headers)

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setSchoolName("");
          setName("");

          console.log(res.data);
          toast.success("post sucessful");
          navigate("/fetch-classes");
        } else {
          toast.error(res.data.error);
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Error Can't create class");
      });
  };
  return (
    <AdminLayout>
      <div className="classes-main">
        <div className="wrapper">
          <header> Class Form</header>
          <form action="#" onSubmit={submitHandler}>
            <div className="field email">
              <div className="input-area">
                <input
                  type="text"
                  placeholder="Class Name"
                  value={name}
                  required
                  onChange={(e: any) => setName(e.target.value)}
                />
                <i className="icon fas fa-envelope"></i>
                <i className="error error-icon fas fa-exclamation-circle"></i>
              </div>
              <div className="error error-txt">Class Name can't be blank</div>
            </div>

            {/* <div className="pass-txt">
              <a href="#">Forgot password?</a>
            </div> */}
            {loading ? (
              <CircularWithValueLabel />
            ) : (
              <input type="submit" value="Post" />
            )}
          </form>
          {/* <div className="sign-txt">
            Not yet member? <a href="#">Signup now</a>
          </div> */}
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminCreateClass;
