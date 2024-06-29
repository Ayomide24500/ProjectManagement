import { getTask } from "../../Api/task";
import { useEffect, useState } from "react";
import AssignedTask from "./Toggles/AssignedTask";

const TaskManagementContainer = () => {
  const [toggle, setToggle] = useState(false);
  const [state, setState] = useState([{}]);

  const handleShowAssign = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    getTask()
      .then((res: any) => {
        setState(res);
      })
      .catch((error: any) => {
        console.error("Error fetching tasks:", error);
      });
  }, []);

  return (
    <div className="mt-8 h-[700px] w-full p-4">
      <div className="py-5 px-5 flex gap-8 lg:mb-0 bg-black text-yellow-400 font-bold">
        <p className="cursor-pointer">View Tasks</p>
      </div>
      <div className="w-[100%] h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3 overflow-y-auto">
        {state &&
          state?.map((task: any) => (
            <div key={task._id}>
              <div className="p-4 shadow-md rounded-md w-[100%] bg-white text-black font-bold">
                <div className="mb-4 w-[100%]">
                  <label className="block text-gray-600 font-semibold mb-2">
                    Task Name:
                  </label>
                  <p>"{task.name}"</p>
                </div>
                <div className="mb-4">
                  <label className="block mb-2">description To:</label>
                  <p>"{task.description}"</p>
                </div>
                <div className="mb-4">
                  <label className="block mb-2">Status:</label>
                  <p
                    className={`text-white font-bold ${
                      task.status === "completed"
                        ? "bg-green-500"
                        : "bg-yellow-500"
                    } py-1 px-2 rounded`}
                  >
                    {task.status}
                  </p>
                </div>
                <div
                  className="py-1 px-2 bg-black text-white cursor-pointer text-center"
                  onClick={handleShowAssign}
                >
                  Assign Task to friends
                </div>
                <div>
                  <label className="block text-gray-600 font-semibold mb-2">
                    Date:
                  </label>
                  <p className="text-gray-800">
                    {new Date().getDate()}/{new Date().getMonth()}/
                    {new Date().getFullYear()}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
      {toggle ? <AssignedTask /> : null}
    </div>
  );
};

export default TaskManagementContainer;
