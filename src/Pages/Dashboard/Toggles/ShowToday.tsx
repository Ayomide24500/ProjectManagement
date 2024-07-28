import { useEffect, useState } from "react";
import { deletedProject, getProject } from "../../../Api/Project";
import { useDispatch } from "react-redux";
import { addProjectID } from "../../../global/reduxState";
import CreateTaskview from "../CreateTaskview";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";

const ShowToday = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [state, setState]: any = useState([]);
  const [selectedProjectId, setSelectedProjectId]: any = useState([]);
  const [toggle, setToggle] = useState(false);
  const [, setShowRecently] = useState(true);
  const [, setShowToday] = useState(false);
  const [, setViewTask] = useState(false);
  const [, setShowTask] = useState(false);
  const [, setActiveLink] = useState("Today");

  const [, setID] = useState("");

  const handleShowTask = () => {
    setShowRecently(false);
    setViewTask(false);
    setShowToday(false);
    setShowTask(true);
    setActiveLink("Task");
  };

  const handleViewTask = (taskId: any) => {
    setSelectedProjectId(taskId);
    setShowRecently(false);
    setViewTask(true);
    setShowToday(false);
    setShowTask(false);
    setActiveLink("viewTask");
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleDeleteProject = (projectID: string) => {
    deletedProject(projectID).then(() => {
      getProject().then((res: any) => {
        setState(res.data);
      });
    });
  };

  useEffect(() => {
    getProject().then((res: any) => {
      setState(res.data);
    });
  }, [state]);

  return (
    <div className="w-full h-[100%] p-4">
      <div
        style={{
          width: "100%",
          height: "78%",
          overflowY: "auto",
          scrollbarWidth: "thin",
          // background: "#e3e3e3",
        }}
      >
        {state &&
          state?.map((project: any) => (
            <div key={project._id}>
              <div className="project-box mt-5 shadow-lg shadow-white">
                <div className="project-box-header flex items-center justify-between bg-gray-300 p-5">
                  <div className="flex items-center">
                    <span className="lg:text-xl font-bold mr-3">
                      {project.projectName}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <button
                      className="bg-yellow-500 text-white lg:px-3 lg:py-1 lg:p-0 p-3 rounded-md mr-3"
                      onClick={() => {
                        handleToggle();
                        dispatch(addProjectID(project?._id));
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-black text-white lg:px-3 lg:py-1 p-3 rounded-md"
                      onClick={() => handleDeleteProject(project._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
                <div className="project-box-body p-3">
                  <p className="text-gray-700 mb-4">
                    Project description goes here. You can add more details
                    about the project in this section.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-black text-[16px] lg:text-[0px]">
                        Completed
                      </span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                      <span className="text-white text-[16px] lg:text-[0px]">
                        In Progress
                      </span>
                    </div>
                  </div>
                </div>
                <div className="project-box-footer p-3">
                  <Button
                    buttonName="➕ Add Task "
                    bgColor=""
                    color=""
                    onClick={() => {
                      handleShowTask();
                      setID(project._id);
                      console.log(project._id);

                      if (project._id) {
                        navigate(`createTask/${project._id}`);
                      }
                    }}
                  />
                  <button
                    className="bg-yellow-500 text-white font-bold px-3 py-1 rounded-md"
                    onClick={() => handleViewTask(project?._id)}
                  ></button>
                </div>
              </div>
            </div>
          ))}
      </div>
      {toggle ? <CreateTaskview {...selectedProjectId} /> : null}
    </div>
  );
};

export default ShowToday;
