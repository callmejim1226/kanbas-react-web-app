import React from "react";
import {
  FaBook,
  FaCheckCircle,
  FaEllipsisV,
  FaPlus,
  FaPlusCircle,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import Dropdown from "react-bootstrap/Dropdown";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId
  );

  const assignmentDue = "Sep 18 at 11:59pm";

  // A dropdown component in assignment
  const assignmentDropDown = () => {
    return (
      <Dropdown>
        <Dropdown.Toggle
          variant="Secondary"
          id="dropdown-basic"
        ></Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>Edit Assign,ment Dates</Dropdown.Item>
          <Dropdown.Item>Assignment group weights</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  return (
    <>
      <div
        className="d-flex flex-row"
        style={{ justifyContent: "space-between" }}
      >
        <input className="p-2" placeholder="Search for Assignments" />
        <div className="d-flex flex-row">
          <button className="btn btn-secondary me-2">+ Group</button>
          <button className="btn btn-danger ">+ Assignment</button>

          {assignmentDropDown()}
        </div>
      </div>
      <hr />
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            <FaEllipsisV className="me-2" />
            <b>ASSIGNMENTS</b>
            <span className="float-end">
              <span
                style={{
                  borderRadius: "10px",
                  border: "2px solid black",
                  padding: "3px",
                }}
              >
                <b style={{ fontSize: "15px" }}>100% of Total</b>
              </span>
              <FaPlus className="ms-2" />
              <FaEllipsisV className="ms-2" />
            </span>
          </div>
          <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item p-3">
                <FaEllipsisV className="me-2" />
                <FaBook className="me-2" style={{ color: "green" }} />
                <Link
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <span>
                    <b>{assignment.title}</b>
                    <br />
                    <span>
                      Multiple Modules | Due {assignmentDue} | 100 pts
                    </span>
                  </span>
                </Link>
                <span className="float-end">
                  <FaCheckCircle className="text-success" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
}
export default Assignments;
