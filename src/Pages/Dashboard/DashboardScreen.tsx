import { useEffect, useState } from "react";
import { createProject, getProject } from "../../Api/Project";
import pix from "../../assets/om.jpeg";
import { Toaster, toast } from "react-hot-toast";
import Calendar from "../../components/Calender";
import ShowToday from "./Toggles/ShowToday";
import ShowRecently from "./Toggles/ShowRecently";
import TaskManagementContainer from "./TaskBox";
import CountdownTimer from "./Countdown";

const DashboardScreen = () => {
  const [, setSelectedProjectId]: any = useState([]);
  const [state, setState]: any = useState([]);
  const [projectName, setProjectName] = useState("");
  const [showRecently, setShowRecently] = useState(true);
  const [showToday, setShowToday] = useState(false);
  const [viewTask, setViewTask] = useState(false);
  const [, setShowTask] = useState(false);
  const [activeLink, setActiveLink] = useState("Recently");
  const [, setProjectCount] = useState(0);

  const handleViewTask = (taskId: any) => {
    setSelectedProjectId(taskId);
    setShowRecently(false);
    setViewTask(true);
    setShowToday(false);
    setShowTask(false);
    setActiveLink("viewTask");
  };

  const handleShowRecently = () => {
    setShowRecently(true);
    setShowToday(false);
    setViewTask(false);
    setShowTask(false);
    setActiveLink("Recently");
  };

  const handleShowToday = () => {
    setShowRecently(false);
    setShowToday(true);
    setViewTask(false);
    setShowTask(false);
    setActiveLink("Today");
  };

  const handleCreateProject = async () => {
    try {
      if (!projectName) {
        alert("Project name is required, please input it");
        return;
      }

      const projectData = { projectName };
      createdAt: new Date().toString();

      const response = await createProject(projectData);

      if (response.data) {
        const createdProject = response.data;

        setState((prevProjects: any) => [...prevProjects, createdProject]);

        setProjectCount((prevCount) => prevCount + 1);
        toast.success("Project created successfully!");
      } else {
        console.error("Invalid response format:", response);
      }
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  useEffect(() => {
    getProject().then((res: any) => {
      setState(res.data);
    });
  }, []);

  return (
    <div
      className="grid grid-rows-2 shadow-lg p-5 min-h-full lg:mb-0 mb-20"
      style={{
        minHeight: "calc(100vh - 50px)",
        borderRadius: "20px",
      }}
    >
      <Toaster />

      <div className="w-full lg:h-[70%] h-full grid lg:grid-cols-2 grid-cols-1 lg:gap-32 gap-5">
        <div
          className="lg:h-full min-h-[200px] lg:min-w-[800px] w-full grid lg:grid-cols-2 grid-cols-1 gap-7"
          // style={{
          //   background:
          //     "linear-gradient(90deg, rgba(233,186,11,1) 0%, rgba(233,186,11,1) 0%)",
          // }}
        >
          <div className="flex flex-wrap w-full">
            <div className="w-10 h-10 object-cover flex rounded-full items-center justify-center mt-4 ml-3 border-none">
              <img
                className="w-full h-full object-cover rounded-full border"
                src={pix}
              />
            </div>
            <div>
              <p className="pl-10 pt-5 font-bold text-xl text-black">
                Hello {state.name}
              </p>
              <h1 className="pl-10 pt-5 font-bold text-3xl text-black">
                You've got <br />
                {state?.length} project(s) today
              </h1>
            </div>
            <input
              type="text"
              placeholder="search something"
              className="h-[50px] w-[80%] border-none outline-none bg-gray-200 pl-3 ml-8 mt-6"
            />
          </div>
          <div className="w-full p-4 flex justify-center items-center flex-col gap-14 shadow">
            <h1 className="pt-5 font-bold lg:text-3xl text-[19px] text-center text-black">
              My Project And Your Task
            </h1>
            <div className="flex justify-center items-center">
              <button className="h-[48px] w-[249px] bg-black shadow-md shadow-yellow-500 text-white font-bold mr-9 rounded ml-9 -mt-8">
                <CountdownTimer />
              </button>
            </div>
          </div>
        </div>
        <div
          className="lg:h-full min-h-[200px] w-full grid grid-rows-2 gap-4"
          style={{
            background: "black",
          }}
        >
          <div className="w-full p-4 flex justify-center items-center flex-wrap gap-9">
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="Enter the project title"
              className="h-[50px] lg:w-[60%] w-full border-2 border-yellow-500 outline-none bg-gray-200 pl-3 shadow-yellow-500 shadow-md"
            />
            <button
              className="h-[44px] w-[140px] bg-yellow-500 text-white rounded mr-9 font-bold ml-9"
              onClick={handleCreateProject}
            >
              Add Project
            </button>
          </div>
          <div className="w-full lg:p-4 p-5 overflow-x-auto shadow-sm bg-white">
            <Calendar />
          </div>
        </div>
      </div>

      <div className="w-full lg:min-h-[530px] bg-yellow-50 grid lg:grid-cols-2 lg:gap-32 lg:-mt-28 mt-3 grid-cols-1 gap-4">
        <div className="lg:h-full h-[600px] lg:min-w-[700px] w-full bg-white shadow-md">
          <div className="h-[50px] w-[95%] flex justify-around items-center gap-5 ml-2 mt-7 bg-black relative">
            <nav
              className={`font-bold lg:text-xl cursor-pointer text-white ${
                activeLink === "Today" ? "text-yellow-400" : ""
              }`}
              style={{
                position: "relative",
                display: "inline-block",
              }}
              onClick={handleShowToday}
            >
              Today
            </nav>
            {activeLink === "Today" && (
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  minHeight: "3px",
                  backgroundColor: "yellow",
                }}
              />
            )}
            <nav
              className={`font-normal lg:text-xl  cursor-pointer text-white ${
                activeLink === "Recently" ? "text-yellow-500" : ""
              }`}
              onClick={handleShowRecently}
            >
              Recently
            </nav>
            {/* <nav
              className={`font-normal lg:text-xl cursor-pointer text-white ${
                activeLink === "Task" ? "text-yellow-500" : ""
              }`}
              onClick={handleShowTask}
            >
              Task
            </nav> */}
            <nav
              className={`font-normal lg:text-xl cursor-pointer text-white ${
                activeLink === "viewTask" ? "text-yellow-500" : ""
              }`}
              onClick={handleViewTask}
            >
              View Task
            </nav>
          </div>
          <div className="h-[87%] w-full">
            {showToday && <ShowToday />}

            {showRecently && (
              <div
                style={{
                  height: "100%",
                  overflowY: "auto",
                  scrollbarWidth: "thin",
                }}
              >
                <ShowRecently />
              </div>
            )}

            {viewTask && (
              <div
                style={{
                  height: "100%",
                  // overflowY: "auto",
                  // scrollbarWidth: "thin",
                }}
                className="bg-white"
              >
                <div className="flex flex-wrap">
                  <TaskManagementContainer />
                </div>
              </div>
            )}
            {/* {showTask && (
              <div
                style={
                  {
                    // overflowY: "auto",
                    // scrollbarWidth: "thin",
                  }
                }
                className="h-full"
              >
                <CreateTasks />
              </div>
            )} */}
          </div>
        </div>
        <div className="lg:h-full h-[400px] w-full shadow-md shadow-yellow-300 bg-white ">
          <h1 className="font-bold text-3xl text-center pt-10">
            Coming Soon 👌🚀🚀🚀
          </h1>
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;
