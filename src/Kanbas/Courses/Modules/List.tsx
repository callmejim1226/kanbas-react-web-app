import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import {
  FaEllipsisV,
  FaCheckCircle,
  FaPlusCircle,
  FaCaretDown,
  FaCaretRight,
} from "react-icons/fa";
import { useParams } from "react-router";
function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
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
        {modulesList.map((module, index) => (
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
