import React, { useState } from "react";
import Sidebar from "./component/Sidebar";
import Navbar from "./component/Navbar";
import DashboardContent from "./component/DashboardContent";
import Activity from "./component/Activity";
import Recruitment from "./component/Recruitment/Recruitment";
import Department from "./component/Department/Department";
import Employee from "./component/Employee/Employee";
import Schedule from "./component/Schedule/Schedule";

const App = () => {
  const [component, setComponent] = useState("Dashboard");
  return (
    <>
     
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="hidden sm:block  md:w-44 lg:w-60">
          <Sidebar component={component} setComponent={setComponent} />
        </div>
        <div className="flex-grow m-2">
          <div className="">
            <Navbar />
          </div>
          {component === "Dashboard" && (
            <div className="lg:grid grid-cols-2 sm:flex-row md:flex-col gap-10 m-5">
              <DashboardContent />
              <Activity />
            </div>
          )}
          {component === "Recruitment" && <Recruitment />}
          {component === "Department" && <Department />}
          {component === "Employee" && <Employee />}
          {component === "Schedule" && <Schedule />}
        </div>
      </div>
    </>
  );
};

export default App;
