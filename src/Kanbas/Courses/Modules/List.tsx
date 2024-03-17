import React, { useState } from "react";
import "./index.css";
import {
  FaEllipsisV,
  FaCheckCircle,
  FaPlusCircle,
  FaCaretDown,
  FaCaretRight,
} from "react-icons/fa";
import { useParams } from "react-router";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./reducer";
import { KanbasState } from "../../store";

interface lessonType {
  _id: string;
  name: string;
  description: string;
  module: string;
}
export interface mouduleType {
  _id: string;
  name: string;
  description: string;
  course: string | undefined;
  lessons: lessonType[];
}
function ModuleList() {
  const { courseId } = useParams();
  const modulesList: mouduleType[] = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );
  const module: mouduleType = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );
  const dispatch = useDispatch();

  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  const publishOptions = [
    "Publish All",
    "Publish All Modules and Items",
    "Publish Modules only",
    "UnPublish All Modules",
  ];

  return (
    <div className="flex-fill">
      <div>
        <button className="btn btn-light status-button me-2">
          Collapse All
        </button>
        <button className="btn btn-light status-button me-2">
          View Progress
        </button>
        <select className="btn btn-light status-button me-2">
          {publishOptions.map((option) => (
            <option>{option}</option>
          ))}
        </select>
        <button className="btn btn-danger">+ Module</button>
      </div>
      <hr />
      <ul className="list-group wd-modules">
        <button
          className="btn btn-success"
          onClick={() => dispatch(addModule({ ...module, course: courseId }))}
        >
          Add
        </button>
        <button
          className="btn btn-secondary mt-2"
          onClick={() => dispatch(updateModule(module))}
        >
          Update
        </button>

        <Form>
          <Form.Group className="mb-3" controlId="ControlInput">
            <Form.Label style={{ fontWeight: "bold" }}>Module Name</Form.Label>
            <Form.Control
              type="input"
              value={module.name}
              style={{ border: "solid grey 1px" }}
              onChange={(e) =>
                dispatch(setModule({ ...module, name: e.target.value }))
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="ControlTextarea">
            <Form.Label style={{ fontWeight: "bold" }}>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              style={{ border: "solid grey 1px" }}
              value={module.description}
              onChange={(e) =>
                dispatch(setModule({ ...module, description: e.target.value }))
              }
            />
          </Form.Group>
        </Form>

        {modulesList
          .filter((module: mouduleType) => module.course === courseId)
          .map((module, index) => (
            <li
              key={index}
              className="list-group-item"
              onClick={() => setSelectedModule(module)}
            >
              <div>
                <FaEllipsisV className="me-2" />
                {selectedModule._id === module._id ? (
                  <FaCaretDown className="me-2" />
                ) : (
                  <FaCaretRight className="me-2" />
                )}
                {module.name}
                <span className="float-end">
                  <button
                    className="btn btn-secondary me-2"
                    onClick={() => dispatch(setModule(module))}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger me-2"
                    onClick={() => dispatch(deleteModule(module._id))}
                  >
                    Delete
                  </button>
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </div>
              {selectedModule._id === module._id && (
                <ul className="list-group">
                  {module.lessons === undefined ? (
                    <li className="list-group-item">No Lessons</li>
                  ) : (
                    module.lessons?.map((lesson, index) => (
                      <li className="list-group-item" key={index}>
                        <FaEllipsisV className="me-2" />
                        {lesson.name}
                        <span className="float-end">
                          <FaCheckCircle className="text-success" />
                          <FaEllipsisV className="ms-2" />
                        </span>
                      </li>
                    ))
                  )}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}
export default ModuleList;
