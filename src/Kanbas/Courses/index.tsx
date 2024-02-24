import { courses } from "../../Kanbas/Database";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import CourseNavigation from "./Navigation";
import { FaBars } from "react-icons/fa";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
function Courses() {
  const { courseId } = useParams();
  const { pathname } = useLocation();
  const currentPageRoute = pathname.slice(
    pathname.lastIndexOf("/"),
    pathname.length
  );
  const currentPageName = currentPageRoute
    .slice(1, currentPageRoute.length)
    .replace("%20", " ");
  const course = courses.find((course) => course._id === courseId);
  return (
    <div className="flex-fill pt-3">
      <div className="d-none d-md-block">
        <div className="d-flex flex-row ps-3">
          <button className="btn" style={{ color: "red" }}>
            <FaBars className="fs-2" />
          </button>

          <h4>
            &emsp; <b style={{ color: "red" }}>{course?.number}</b>{" "}
            {` > ${currentPageName}`}
          </h4>
        </div>
        <hr />
      </div>

      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
        <div className="flex-fill p-3">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<h1>Assignment Editor</h1>}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;
