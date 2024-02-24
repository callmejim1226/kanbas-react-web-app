import ModuleList from "../Modules/List";

function Home() {
  const moduleSettingOptions = [
    "Import Existing Content",
    "Import From Commons",
    "Choose Home Page",
    "View Course Stream",
    "New Annoucement",
    "New Analytics",
    "View Course Notifications",
  ];
  const comingUps = [
    "Lecture RS4560 on Sept 7",
    "Lecture RS4560 on Sept 11",
    "Lecture RS4570 on Sept 11",
  ];
  return (
    <div className="d-flex">
      <ModuleList />
      <div className="flex-grow-0 me-2 d-none d-lg-block ps-4">
        <h3>Course Status</h3>
        <br />
        <button className="btn btn-light status-button">Unpublish</button>
        <button className="btn btn-success status-button">Published</button>
        <div className="d-flex flex-column pt-3">
          {moduleSettingOptions.map((option) => (
            <button className="btn btn-light status-option-button mb-2">
              {option}
            </button>
          ))}
        </div>
        <div
          className="d-flex flex-row mt-3"
          style={{ justifyContent: "space-between" }}
        >
          <h5>Coming Up</h5>
          <button className="btn" style={{ fontSize: "small" }}>
            View Calendar
          </button>
        </div>
        <hr />
        <ul>
          {comingUps.map((stuff) => (
            <li>
              <button className="btn">{stuff}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Home;
