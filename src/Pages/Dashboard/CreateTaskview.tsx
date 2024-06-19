import { FC, useEffect, useState } from "react";
import { updateProject } from "../../Api/Project";
import { useSelector } from "react-redux";
const CreateTaskview = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [newProjectName, setNewProjectName] = useState("");

  const id = useSelector((state: any) => state.projectID);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleUpdateProject = (projectName: any) => {
    updateProject(id, projectName).then((res) => {
      console.log("res", res);

      return res;
    });
  };

  return (
    <div className="h-screen w-full fixed">
      {isVisible ? (
        <div
          className="bg-opacity-40 shadow-lg backdrop-blur-20 border border-opacity-18 border-white rounded-lg"
          style={{
            minWidth: "100%",
            height: "100%",
            position: "fixed",
            top: 0,
            left: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba( 223, 207, 9, 0.2 )",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          }}
        >
          <form
            className="h-[600px] lg:w-[50%] w-full shadow-lg flex justify-center items-center flex-col gap-9 bg-white backdrop-blur-20"
            style={{
              background: "rgba( 223, 207, 9, 0.25 )",
              boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            }}
          >
            <input
              type="text"
              placeholder="Edit the project name here..."
              value={newProjectName}
              onChange={(e) => setNewProjectName(e.target.value)}
              className="h-[50px] lg:w-[30%] w-[70%] outline-none border-none pl-5"
            />
            <button
              onClick={(event) => {
                event.preventDefault();
                handleUpdateProject(newProjectName);
              }}
              className="lg:p-5 p-3 shadow bg-yellow-500"
            >
              Update Project
            </button>
            <button
              onClick={toggleVisibility}
              className="lg:p-5 p-3 shadow shadow-white bg-yellow-500"
            >
              Handle go off
            </button>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default CreateTaskview;
