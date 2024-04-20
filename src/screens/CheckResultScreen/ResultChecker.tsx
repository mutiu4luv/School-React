import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button } from "@material-ui/core";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Footer from "../../components/Footer/Footer";
import CircularIndeterminate from "../../components/Loading/Progress";
import TopNavBar from "../../components/TopNavBar/TopNavBar";
import Header from "../../components/Header/Header";
import { ClassApi, ResultApi, getAllSchools } from "../../APiData/Api";

const ITEM_HEIGHT = 100;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
// function getStyles( personName: string[], theme: Theme) {
//   return {
//     fontWeight:

//   };
// }
interface Props {
  //   apiData: any;
}
const ResultChecker: React.FC<Props> = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const theme = useTheme();
  // State to store the selected option
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedTerm, setSelectedTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSchool, setSelectedSchool] = useState("");
  const [resultData, setResultData] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [schools, setSchools] = useState([]);
  const [classes, setClasses] = useState([]);
  const [loader, setLoader] = useState(false);
  // State to store the API response
  const [apiData, setApiData] = useState(null);
  //   const DisplayData = apiData;
  // Function to handle the select input change
  const handleSelectChange = (e: any) => {
    setSelectedYear(e.target.value);
  };
  const handleSelectSchoolChange = (e: any) => {
    setSelectedSchool(e.target.value);
    // fetchSchololClass();
  };
  const handleSelectClassChange = (e: any) => {
    setSelectedClass(e.target.value);
  };
  const handleSelectTermChange = (e: any) => {
    setSelectedTerm(e.target.value);
  };
  // Function to make the API GET request

  const fetchApiData = () => {
    setLoading(true);
    // Make your API GET request here using a library like Axios or the built-in fetch API
    // Replace 'YOUR_API_ENDPOINT' with the actual API URL
    fetch(
      `http://localhost:5000/api/Results/results/${selectedSchool}/${selectedClass}/${userId}/${selectedYear}/${selectedTerm}/`
    )
      .then((response) => response.json())
      .then((data) => {
        setApiData(data);
        setLoading(false);
        navigate(
          `/my-result/${selectedSchool}/${selectedClass}/${userId}/${selectedYear}/${selectedTerm}`
        );
        console.log(data);
        toast.success("Result sucessful");
      })
      .catch((error) => {
        // console.error("Error fetching data:", error);
        setLoading(false);
        // navigate("/PreNursery-result");
        toast.error("No result found");
      });
  };
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(ResultApi);
      console.log(data);
      // const foundData = data.find((item) => item.artist === artist);
      setResultData(data);
    };

    fetchPosts();
  }, []);
  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const response = await axios.get(getAllSchools);
        const schoolData = response.data.map((school: any) => ({
          name: school.name,
          id: school._id,
        }));
        setSchools(schoolData);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchSchools();
  }, []);
  useEffect(() => {
    // Fetch classes when selectedSchoolId changes
    if (selectedSchool) {
      axios
        .get("http://localhost:5000/api/Class")
        .then((response) => {
          setClasses(
            response.data.filter(
              (item: any) => item.schoolName._id === selectedSchool
            )
          );
        })
        .catch((error) => {
          console.error("Error fetching classes:", error);
        });
    }
  }, [selectedSchool]);

  return (
    <>
      <TopNavBar />
      <Header />
      <div>
        <div className="check-result-flex-div">
          <div className="check-result-col-div">
            <div className="guideline-div">
              <h3 className="tip-h3">Tips</h3>
              <ul className="ul-list-style">
                <li>
                  Obtain your Registration Code from your schools / Director
                </li>
                <li>
                  Obtain a scratch card from your school or a verified vendor
                </li>
                <li>
                  Scratch off the covered / sealed area to reveal the card pin
                </li>
                <li>
                  Enter the Pin and Serial number and other details required
                </li>
                <li>
                  Click on the » Check result button (located at the bottom)
                </li>
              </ul>
            </div>
          </div>
          <div className="select-check-div">
            <div>
              <h2>Result Checker</h2>
              <div className="form-control-div">
                {" "}
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-name-label">School</InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    // multiple
                    // value={personName}
                    onChange={handleSelectSchoolChange}
                    value={selectedSchool}
                    // input={<OutlinedInput label="Name" />}
                  >
                    <MenuItem value="">Select your School</MenuItem>
                    {schools
                      .sort((a: any, b: any) => a.name.localeCompare(b.name))
                      .map((school: any) => (
                        <MenuItem key={school.id} value={school.id}>
                          {" "}
                          {school.name}
                        </MenuItem>
                      ))}
                  </Select>
                </FormControl>
              </div>

              <div className="form-control-div">
                {" "}
                {selectedSchool && (
                  <>
                    <FormControl sx={{ m: 1, width: 300 }}>
                      <InputLabel id="demo-multiple-name-label">
                        Class
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-name-label"
                        id="demo-multiple-name"
                        // multiple
                        // value={personName}
                        onChange={handleSelectClassChange}
                        value={selectedClass}
                        // input={<OutlinedInput label="Name" />}
                      >
                        <MenuItem value="">Select your Class</MenuItem>
                        {classes
                          .sort((a: any, b: any) =>
                            a.name.localeCompare(b.name)
                          )
                          .map((classy: any) => (
                            <MenuItem key={classy._id} value={classy.name}>
                              {" "}
                              {classy.name}
                            </MenuItem>
                          ))}
                      </Select>
                    </FormControl>
                  </>
                )}
              </div>
              <div className="form-control-div">
                {" "}
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-name-label">Year</InputLabel>
                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    // multiple
                    // value={personName}
                    onChange={handleSelectChange}
                    value={selectedYear}
                    // input={<OutlinedInput label="Name" />}
                  >
                    <MenuItem value="2023">2023</MenuItem>
                    <MenuItem value="2024">2024</MenuItem>
                    <MenuItem value="2025">2025</MenuItem>
                    {/* {resultData?.map((item: any) => (
                    <>
                      <MenuItem value={item?.year}>{item?.year} </MenuItem>
                    </>
                  ))} */}
                  </Select>
                </FormControl>
              </div>
              <div className="form-control-div">
                <FormControl sx={{ m: 1, width: 300 }}>
                  <InputLabel id="demo-multiple-name-label">Term</InputLabel>

                  <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    // multiple
                    value={selectedTerm}
                    onChange={handleSelectTermChange}
                    // input={<OutlinedInput label="Name" />}
                  >
                    <MenuItem value="1st_Term">1st Term</MenuItem>
                    <MenuItem value="2nd_Term">2nd Term</MenuItem>
                    <MenuItem value="3rd_Term">3rd Term</MenuItem>
                    {/* {resultData?.map((item: any) => (
                    <>
                      <MenuItem value={item?.term}>{item?.term} </MenuItem>
                    </>
                  ))} */}
                  </Select>
                </FormControl>
              </div>
              {loading ? (
                <CircularIndeterminate />
              ) : (
                <div>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    style={{
                      color: "white",
                      backgroundColor: "green",
                      border: "greenyellow",
                      width: "45%",
                      marginTop: "25px",
                    }}
                    className="proceed-btn"
                    onClick={fetchApiData}
                  >
                    Check Result
                  </Button>
                  <ToastContainer />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ResultChecker;
