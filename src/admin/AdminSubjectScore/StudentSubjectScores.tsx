import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent, selectClasses } from "@mui/material/Select";
import { Dropdown } from "react-bootstrap";
import "./subjectscore.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { TextField, Button } from "@mui/material";
import { SubjectMarksApi, SubjectsApi, UserApi } from "../../APiData/Api";
import CircularIndeterminate from "../../components/Loading/Progress";
import AdminLayout from "../AdminDashboard/AdminLayout";

const StudentSubjectScores = () => {
  const navigate = useNavigate();
  const { id, selectedSchool, selectedClass } = useParams();

  const [user, setUser] = useState(id);
  console.log(id);
  const [term, setTerm] = useState("");
  const [year, setYear] = useState("");
  const [schoolName, setSchoolName] = useState(selectedSchool);
  const [classes, setClasses] = useState(selectedClass);
  const [subjectlist, setSubjectlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userDatas, setUserDatas] = useState<any | null>(null);
  const [selectedSubject, setSelectedSubject] = useState("");
  const handleLoader = () => {
    setLoading(true);
  };
  const [subjectsData, setSubjectsData] = useState({
    subjectName: "",
    test: 0,
    exam: 0,
    totalScore: 0,
    grade: "",
    remark: "",
  });

  const handleInputChange = (
    subject: "subjectsData",

    type: "subjectName" | "test" | "exam" | "grade" | "remark",
    value: number
  ) => {
    switch (subject) {
      case "subjectsData":
        setSubjectsData((prev: any) => ({ ...prev, [type]: value }));
        break;
    }
  };

  const calculateSubjectsDataTotal = () => {
    const totalScore = subjectsData.test + subjectsData.exam;
    let grade = "";
    let remark = "";
    if (subjectsData.totalScore >= 70 && subjectsData.totalScore <= 100) {
      grade = "A";
      remark = "Excellent";
    } else if (subjectsData.totalScore >= 60 && subjectsData.totalScore <= 69) {
      grade = "B";
      remark = "Very Good";
    } else if (subjectsData.totalScore >= 50 && subjectsData.totalScore <= 59) {
      grade = "C";
      remark = "Good";
    } else if (subjectsData.totalScore >= 40 && subjectsData.totalScore <= 49) {
      grade = "D";
      remark = "Pass";
    } else if (subjectsData.totalScore >= 0 && subjectsData.totalScore <= 39) {
      grade = "F";
      remark = "Fail";
    }
    setSubjectsData({ ...subjectsData, totalScore, grade, remark });
  };

  React.useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(UserApi + id);
      console.log(data);

      setUserDatas(data);
    };

    fetchPosts();
  }, [id]);
  React.useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(SubjectsApi);
      console.log(data);

      setSubjectlist(
        data.filter(
          (item: any) =>
            item?.schoolName._id === selectedSchool &&
            item?.classes._id === selectedClass
        )
      );
    };

    fetchPosts();
  }, [id]);
  const submitHandler = (e: any) => {
    e.preventDefault();
    setLoading(true);
    const data: any = {
      user: user,
      classes: classes,
      year: year,
      schoolName: schoolName,
      term: term,

      subjects: [
        // ...English,
        {
          subjectName: selectedSubject,
          test: subjectsData.test,
          exam: subjectsData.exam,
          totalScore: subjectsData.totalScore,
          grade: subjectsData.grade,
          remark: subjectsData.remark,
        },
      ],
    };

    const headers: any = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .post(SubjectMarksApi, data, headers)

      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data) {
          setUser("");
          setTerm(" ");
          setYear(" ");

          setSchoolName("");
          setClasses(" ");

          console.log(res.data);
          toast.success("post sucessful");
          navigate("/view-subject-marks");
        } else {
          toast.error(res.data.error);
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error(
          "Failed to create a post, check your network connection or input the correct textfields"
        );
      });
  };

  return (
    <>
      <AdminLayout>
        <div className="register-main">
          <div className="container">
            <div className="item-center">
              {" "}
              <div className="title">Student Subject Score</div>
            </div>

            <div className="content">
              <div
                style={{
                  width: "100px",
                  height: "12vh",
                  display: "flex",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginBottom: "10px",
                }}
              >
                <img
                  src={userDatas?.passportPhoto}
                  alt="img"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />{" "}
              </div>
              <h6
                className="  d-flex justify-content-center"
                style={{ fontSize: "medium", fontWeight: "600" }}
              >
                Input Subject Score of
              </h6>
              <div
                className="text-center mb-4"
                style={{ fontSize: "x-large", fontWeight: "600" }}
              >
                <span
                  style={{
                    marginLeft: "3px",
                    marginRight: "3px",
                    color: "#5372f0",
                  }}
                >
                  {userDatas?.firstName}{" "}
                </span>
                <span className="ml-3" style={{ color: "#5372f0" }}>
                  {userDatas?.lastName}{" "}
                </span>
              </div>
              <div
                className="text-center "
                style={{ color: "#5372f0", fontWeight: "600" }}
              >
                {userDatas?.schoolRegNumber}{" "}
              </div>
              <p
                className="d-flex justify-content-center"
                style={{ marginLeft: "15px", fontSize: "medium" }}
              >
                *pls select your subject and input result*
              </p>

              <form onSubmit={submitHandler}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  <FormControl sx={{ m: 1, width: 370 }}>
                    <InputLabel id="demo-multiple-name-label">
                      Subject
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      // multiple

                      required
                      value={selectedSubject}
                      onChange={(e: any) => setSelectedSubject(e.target.value)}
                    >
                      <MenuItem>Select subject</MenuItem>
                      {subjectlist?.map((item: any) => (
                        <MenuItem value={item?.name} key={item?._id}>
                          {item?.name.replace(/_/g, " ")}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  {selectedSubject && (
                    <div className="input-box">
                      <Dropdown>
                        <Dropdown.Toggle
                          variant="success"
                          id="dropdown-basic"
                          style={{
                            border: "1px solid green",
                            backgroundColor: "white",
                            marginTop: "15px",
                            color: "black",
                          }}
                          className="result-input-elect-nursery1"
                        >
                          Subject
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <div
                            className="col-md-6 mb-2 mt-1"
                            // style={{
                            //   marginLeft: "auto",
                            //   marginRight: "auto",
                            // }}
                          >
                            <TextField
                              style={{
                                width: "150px",
                                marginLeft: "4px",
                              }}
                              required
                              rows={4}
                              id="outlined-required"
                              label={selectedSubject.replace(/_/g, " ")}
                              name="subjectName"
                              type="text"
                              value={selectedSubject}
                              //   onChange={(e: any) =>
                              //     handleInputChange(
                              //       "subjectsData",
                              //       "subjectName",
                              //       e.target.value
                              //     )
                              //   }
                            />
                          </div>
                          <div className="col-md-6 mb-2 mt-2 ">
                            <TextField
                              style={{
                                width: "150px",
                                marginLeft: "4px",
                              }}
                              required
                              rows={4}
                              id="outlined-required"
                              label="Test/C.A"
                              type="number"
                              name="test"
                              value={subjectsData.test}
                              onChange={(e) =>
                                handleInputChange(
                                  "subjectsData",
                                  "test",
                                  +e.target.value
                                )
                              }
                              onBlur={calculateSubjectsDataTotal}
                            />
                          </div>
                          <div
                            className="col-md-6 mb-2 mt-1"
                            // style={{
                            //   marginLeft: "auto",
                            //   marginRight: "auto",
                            // }}
                          >
                            <TextField
                              style={{
                                width: "150px",
                                marginLeft: "4px",
                              }}
                              required
                              rows={4}
                              id="outlined-required"
                              label="Exam"
                              name="exam"
                              type="number"
                              value={subjectsData.exam}
                              onBlur={calculateSubjectsDataTotal}
                              onChange={(e) =>
                                handleInputChange(
                                  "subjectsData",
                                  "exam",
                                  +e.target.value
                                )
                              }
                            />
                          </div>
                          <div
                            className="col-md-6 mb-2 mt-2"
                            // style={{
                            //   marginLeft: "auto",
                            //   marginRight: "auto",
                            // }}
                          >
                            {/* {NumeracyData.totalScore} */}
                            <TextField
                              style={{
                                width: "150px",
                                marginLeft: "4px",
                              }}
                              required
                              rows={4}
                              id="outlined-required"
                              label="Total Score"
                              type="number"
                              name="totalScore"
                              value={subjectsData.totalScore}
                            />
                          </div>
                          <div
                            className="col-md-6 mb-2 mt-1"
                            // style={{
                            //   marginLeft: "auto",
                            //   marginRight: "auto",
                            // }}
                          >
                            <TextField
                              style={{
                                width: "150px",
                                marginLeft: "4px",
                              }}
                              required
                              rows={4}
                              id="outlined-required"
                              label="Grade"
                              name="grade"
                              type="text"
                              value={subjectsData.grade}
                              onChange={(e: any) =>
                                handleInputChange(
                                  "subjectsData",
                                  "grade",
                                  e.target.value
                                )
                              }
                            />
                          </div>
                          <div
                            className="col-md-6 mb-2 mt-1"
                            // style={{
                            //   marginLeft: "auto",
                            //   marginRight: "auto",
                            // }}
                          >
                            <TextField
                              style={{
                                width: "150px",
                                marginLeft: "4px",
                              }}
                              required
                              rows={4}
                              id="outlined-required"
                              name="remark"
                              label="Remark"
                              type="text"
                              value={subjectsData.remark}
                              onChange={(e: any) =>
                                handleInputChange(
                                  "subjectsData",
                                  "remark",
                                  e.target.value
                                )
                              }
                            />
                          </div>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  )}
                  <FormControl sx={{ m: 1, width: 370 }}>
                    <InputLabel id="demo-multiple-name-label">Term</InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      // multiple
                      value={term}
                      onChange={(e) => setTerm(e.target.value)}
                    >
                      <MenuItem value="1st Term">1st Term</MenuItem>
                      <MenuItem value="2nd Term">2nd Term</MenuItem>
                      <MenuItem value="3rd Term">3rd Term</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl sx={{ m: 1, width: 370 }}>
                    <InputLabel id="demo-multiple-name-label">Year</InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      // multiple
                      fullWidth
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      // input={<OutlinedInput label="Name" />}
                    >
                      <MenuItem value="2023">2023</MenuItem>
                      <MenuItem value="2024">2024</MenuItem>
                      <MenuItem value="2025">2025</MenuItem>
                      <MenuItem value="2026">2026</MenuItem>
                      <MenuItem value="2027">2027</MenuItem>
                      <MenuItem value="2028">2028</MenuItem>
                      <MenuItem value="2029">2029</MenuItem>
                      <MenuItem value="2030">2030</MenuItem>
                    </Select>
                  </FormControl>

                  {loading ? (
                    <CircularIndeterminate />
                  ) : (
                    <div
                      className="d-flex justify-content-center"

                      // onClick={handleLoader}
                    >
                      <Button
                        fullWidth
                        variant="contained"
                        onSubmit={handleLoader}
                        type="submit"
                      >
                        Upload Score
                      </Button>
                      <ToastContainer />
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </AdminLayout>
    </>
  );
};

export default StudentSubjectScores;
