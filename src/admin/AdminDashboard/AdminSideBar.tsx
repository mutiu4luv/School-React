import React from "react";
import { FaArrowDown, FaShoppingBag } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

import { Link } from "react-router-dom";
import { Dropdown, Menu, MenuButton, MenuItem } from "@mui/joy";

const AdminSideBar = () => {
  return (
    <>
      <li
        style={{
          marginTop: "20px",
        }}
      >
        <a href="#">
          <i className="bx bxs-shopping-bag-alt"></i>
          {/* <FaShoppingBag /> */}

          <Dropdown id="sidebar">
            <MenuButton
              style={{
                border: "2px solid transparent",
                fontSize: "medium",
              }}
            >
              Register Student{" "}
              <MdKeyboardArrowDown style={{ marginLeft: "5px" }} />
            </MenuButton>
            <Menu>
              <MenuItem>
                <Link to="/register-student">Register a Student</Link>{" "}
              </MenuItem>
            </Menu>
          </Dropdown>
        </a>
      </li>

      <li style={{ marginTop: "20px" }}>
        <a href="#">
          <i className="bx bxs-shopping-bag-alt"></i>
          {/* <FaShoppingBag /> */}

          <Dropdown id="sidebar">
            <MenuButton
              style={{ border: "2px solid transparent", fontSize: "medium" }}
            >
              Students <MdKeyboardArrowDown style={{ marginLeft: "5px" }} />
            </MenuButton>
            <Menu>
              <MenuItem>View Students</MenuItem>
            </Menu>
          </Dropdown>
        </a>
      </li>
      <li style={{ marginTop: "20px" }}>
        <a href="#">
          <i className="bx bxs-shopping-bag-alt"></i>
          {/* <FaShoppingBag /> */}

          <Dropdown id="sidebar">
            <MenuButton
              style={{ border: "2px solid transparent", fontSize: "medium" }}
            >
              Staffs <MdKeyboardArrowDown style={{ marginLeft: "5px" }} />
            </MenuButton>
            <Menu>
              <MenuItem>View Staffs</MenuItem>
            </Menu>
          </Dropdown>
        </a>
      </li>
      <li style={{ marginTop: "20px" }}>
        <a href="#">
          <i className="bx bxs-shopping-bag-alt"></i>
          {/* <FaShoppingBag /> */}

          <Dropdown id="sidebar">
            <MenuButton
              style={{ border: "2px solid transparent", fontSize: "medium" }}
            >
              Class <MdKeyboardArrowDown style={{ marginLeft: "5px" }} />
            </MenuButton>
            <Menu>
              <MenuItem>Create Class</MenuItem>
              <MenuItem>View Classes</MenuItem>
            </Menu>
          </Dropdown>
        </a>
      </li>
      <li style={{ marginTop: "20px" }}>
        <a href="#">
          <i className="bx bxs-shopping-bag-alt"></i>
          {/* <FaShoppingBag /> */}

          <Dropdown id="sidebar">
            <MenuButton
              style={{ border: "2px solid transparent", fontSize: "medium" }}
            >
              Subjects <MdKeyboardArrowDown style={{ marginLeft: "5px" }} />
            </MenuButton>
            <Menu>
              <MenuItem>Create Subject</MenuItem>
              <MenuItem>View Subjects</MenuItem>
            </Menu>
          </Dropdown>
        </a>
      </li>
      <li style={{ marginTop: "20px" }}>
        <a href="#">
          <i className="bx bxs-shopping-bag-alt"></i>
          {/* <FaShoppingBag /> */}

          <Dropdown id="sidebar">
            <MenuButton
              style={{ border: "2px solid transparent", fontSize: "medium" }}
            >
              Subject Score Sheet{" "}
              <MdKeyboardArrowDown style={{ marginLeft: "5px" }} />
            </MenuButton>
            <Menu>
              <MenuItem>Create Student Subject Score</MenuItem>
              <MenuItem>View Student Subject Score</MenuItem>
            </Menu>
          </Dropdown>
        </a>
      </li>
      <li style={{ marginTop: "20px" }}>
        <a href="#">
          <i className="bx bxs-shopping-bag-alt"></i>
          {/* <FaShoppingBag /> */}

          <Dropdown id="sidebar">
            <MenuButton
              style={{ border: "2px solid transparent", fontSize: "medium" }}
            >
              Result <MdKeyboardArrowDown style={{ marginLeft: "5px" }} />
            </MenuButton>
            <Menu>
              <MenuItem>Create Result</MenuItem>
              <MenuItem>View Result</MenuItem>
            </Menu>
          </Dropdown>
        </a>
      </li>
      <li style={{ marginTop: "20px" }}>
        <a href="#">
          <i className="bx bxs-shopping-bag-alt"></i>
          {/* <FaShoppingBag /> */}

          <Dropdown id="sidebar">
            <MenuButton
              style={{ border: "2px solid transparent", fontSize: "medium" }}
            >
              Commutative Result{" "}
              <MdKeyboardArrowDown style={{ marginLeft: "5px" }} />
            </MenuButton>
            <Menu>
              <MenuItem>Create Commutative Result</MenuItem>
              <MenuItem>View Commutative Result</MenuItem>
            </Menu>
          </Dropdown>
        </a>
      </li>
      <li style={{ marginTop: "20px" }}>
        <a href="#">
          <i className="bx bxs-shopping-bag-alt"></i>
          {/* <FaShoppingBag /> */}

          <Dropdown id="sidebar">
            <MenuButton
              style={{ border: "2px solid transparent", fontSize: "medium" }}
            >
              Grade Marks <MdKeyboardArrowDown style={{ marginLeft: "5px" }} />
            </MenuButton>
            <Menu>
              <MenuItem>Create Grades</MenuItem>
              <MenuItem>View Result Grades</MenuItem>
            </Menu>
          </Dropdown>
        </a>
      </li>
      <li style={{ marginTop: "20px" }}>
        <a href="#">
          <i className="bx bxs-shopping-bag-alt"></i>
          {/* <FaShoppingBag /> */}

          <Dropdown id="sidebar">
            <MenuButton
              style={{ border: "2px solid transparent", fontSize: "medium" }}
            >
              School Scratch Card{" "}
              <MdKeyboardArrowDown style={{ marginLeft: "5px" }} />
            </MenuButton>
            <Menu>
              <MenuItem>Generate Scratch Card</MenuItem>
              <MenuItem>View Scratch Cards</MenuItem>
            </Menu>
          </Dropdown>
        </a>
      </li>
      <ul>
        <li>
          <a href="#" className="logout">
            <i className="bx bxs-log-out-circle"></i>
            <span className="text">Logout</span>
          </a>
        </li>
      </ul>
    </>
  );
};

export default AdminSideBar;
