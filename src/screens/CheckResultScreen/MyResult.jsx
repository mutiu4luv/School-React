import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container } from "@material-ui/core";
import "./ViewResult.css";

import Table from "react-bootstrap/Table";
// import stamp from "../../assets/images/stamp.png";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export const MyResult = React.forwardRef((props, ref) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const navigate = useNavigate();
  const { selectedSchool, selectedClass, selectedYear, userId, selectedTerm } =
    useParams();
  const [viewResult, setViewResult] = useState({});
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/Results/results/${selectedSchool}/${selectedClass}/${userId}/${selectedYear}/${selectedTerm}`
        );
        console.log(data);
        // const foundData = data.find((item) => item.artist === artist);
        setViewResult(data);
      } catch (error) {
        // Handle the error here
        navigate("/Result-check");
        console.error("Result not Found:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <TopNavBar />
      <Header />
      <div className="mt-2 mb-2" key={viewResult._id}>
        <Container>
          {/* {viewResult?.Position} */}
          <div className="result-main-div-section" ref={componentRef}>
            <div className="display-content-head-result">
              <div className="logo-result-div">
                <img
                  src={viewResult?.school?.schoolLogo}
                  alt="logo"
                  className="logo-result"
                />{" "}
              </div>{" "}
              <div>
                <h3
                  className="our-title-h3"
                  style={{ textTransform: "uppercase" }}
                >
                  {viewResult?.schoolName.replace(/_/g, " ")}
                </h3>
                <div className="adress-text">
                  <div>{viewResult?.school?.address} </div>
                  <div>
                    <span>{viewResult?.school?.state} </span>{" "}
                    <span>{viewResult?.school?.country} </span>
                  </div>
                </div>
                <div className="sheet-div">
                  <div style={{ textTransform: "uppercase" }}>
                    {viewResult?.classes} SCHOOL TERMINAL RESULT SHEET
                  </div>
                </div>
              </div>
              <div className="img-passport-result-div">
                <img
                  src={viewResult?.user?.passportPhoto}
                  alt="passport"
                  className="img-passport-result"
                />
              </div>{" "}
            </div>
            <div className="user-result-detail-display">
              <div>
                <span>NAME:</span> {viewResult?.user?.firstName}{" "}
                {viewResult?.user?.lastName}
              </div>
              <div className="user-d-class">
                <span> CLASS:</span> {viewResult?.classes}
              </div>
              <div className="mt-4">
                <span> TERM:</span> {viewResult?.term.replace(/_/g, " ")}
              </div>
              <div className="mt-4">
                <span> YEAR:</span> {viewResult?.year}
              </div>
            </div>
            <div className="table-div">
              <Table responsive="sm" bordered hover>
                <thead>
                  <tr>
                    {/* <th>#</th> */}
                    <th>SUBJECT</th>
                    <th>CA</th>
                    <th>EXAM</th>
                    <th>TOTAL</th>
                    <th>GRADE</th>
                    <th>REMARK</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {viewResult?.subjects?.map((item) => (
                        <tr key={item._id}>
                          {item?.subjects?.map((item) => (
                            <td>{item?.subjectName}</td>
                          ))}
                        </tr>
                      ))}{" "}
                    </td>
                    <td>
                      {viewResult?.subjects?.map((item) => (
                        <tr>
                          {item?.subjects?.map((item) => (
                            <td>{item?.test}</td>
                          ))}
                        </tr>
                      ))}{" "}
                    </td>
                    <td>
                      {" "}
                      {viewResult?.subjects?.map((item) => (
                        <tr>
                          {item?.subjects?.map((item) => (
                            <td>{item?.exam}</td>
                          ))}
                        </tr>
                      ))}{" "}
                    </td>
                    <td>
                      {viewResult?.subjects?.map((item) => (
                        <tr>
                          {item?.subjects?.map((item) => (
                            <td>{item?.totalScore}</td>
                          ))}
                        </tr>
                      ))}{" "}
                    </td>
                    <td>
                      {viewResult?.subjects?.map((item) => (
                        <tr>
                          {item?.subjects?.map((item) => (
                            <td>{item?.grade}</td>
                          ))}
                        </tr>
                      ))}{" "}
                    </td>
                    <td>
                      {viewResult?.subjects?.map((item) => (
                        <tr>
                          {item?.subjects?.map((item) => (
                            <td>{item?.remark}</td>
                          ))}
                        </tr>
                      ))}{" "}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="table-div-2">
              <Table striped bordered hover responsive="sm">
                <thead>
                  <tr>
                    <th>TOTAL SCORE</th>
                    <th>TOTAL AVERAGE</th>
                    <th>TOTAL GRADE</th>
                    <th>POSITION</th>
                    <th>OUT OF</th>
                    <th>FORM TEACHER REMARK</th>
                    <th>HEAD TEACHER REMARK</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{viewResult?.TotalScore} </td>
                    <td>{viewResult?.TotalAverage} </td>
                    <td>{viewResult?.TotalGrade} </td>
                    <td>{viewResult?.Position} </td>
                    <td>{viewResult?.numberInClass} </td>
                    <td>{viewResult?.Remark} </td>
                    <td>{viewResult?.HmRemark} </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          <Button variant="contained" onClick={handlePrint}>
            Print Result!
          </Button>
        </Container>
      </div>

      <Footer />
    </>
  );
});

// export default ViewResult;
