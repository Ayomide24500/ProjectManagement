import { useEffect, useState } from "react";
import { deletedTask, getTask } from "../../Api/task";
import { MdDeleteForever } from "react-icons/md";
import { MdOutlineTaskAlt } from "react-icons/md";
import { getProject } from "../../Api/Project";

const AllTaskView = () => {
  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState([]);
  const [, setState] = useState([]);

  useEffect(() => {
    setLoading(true);
    getTask()
      .then((res) => {
        setTasks(res);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    getProject().then((res: any) => {
      setState(res);

      console.log(res?.projectName);
    });
  }, []);

  const handleDeleteTask = (taskId: string) => {
    deletedTask(taskId)
      .then(() => {
        setTasks((prevTasks) =>
          prevTasks.filter((task: any) => task._id !== taskId)
        );
      })
      .catch((error) => {
        console.error("Error deleting task:", error);
      });
  };

  return (
    <div>
      <div>
        {loading ? (
          <p className="pl-16 font-bold text-[20px]">Loading...</p>
        ) : (
          <div
            style={{
              height: "100%",
              width: "97%",
              overflowY: "auto",
              scrollbarWidth: "thin",
              gap: "9px",
              marginLeft: "25px",
              background: "rgb(0,0,0)",
              backgroundColor:
                "linear-gradient(90deg, rgba(0,0,0,1) 75%, rgba(48,43,21,1) 100%)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              backdropFilter: "blur(40px)",
              WebkitBackdropFilter: "blur(40px)",
              borderRadius: "10px",
            }}
          >
            <div className="py-6 px-6 w-full display flex justify-center items-center flex-col gap-3">
              <div
                className="h-[70px] w-[70px] bg-yellow-400 flex justify-center items-center"
                style={{ borderRadius: "100%" }}
              >
                <MdOutlineTaskAlt className="font-bold text-5xl" />
              </div>
              <p className="font-bold text-xl text-white">Task List</p>

              <div className=" w-full overflow-x-auto">
                <div className="py-6 px-2 border-b rounded-md min-w-[100%] overflow-y-hidden mt-">
                  <div className="w-[100%] text-[silver] flex gap-9 text-[12px] font-bold uppercase mb-10 px-4">
                    <div className="w-[150px] border-r">Team Image</div>
                    <div className="w-[200px] border-r">Assigned Team</div>
                    <div className="w-[150px] border-r">Project Title</div>
                    <div className="w-[150px] border-r">Task Name</div>
                    <div className="w-[130px] border-r">Status</div>
                    <div className="w-[300px] border-r">Description</div>
                    <div className="w-[250px] border-r">Completed</div>
                    <div className="w-[100px] border-r">Delete</div>
                  </div>

                  <div>
                    {tasks.map((task: any) => (
                      <div
                        key={task._id}
                        className="w-[100%] flex items-center gap-9 text-[12px] font-medium  h-16 px-4 my-2 overflow-hidden text-yellow-400"
                      >
                        <div className="w-[150px] border-r text-white bg-pink-200">
                          {/* {state &&
                              state?.map((project: any) => (
                                <div
                                  key={project._id}
                                  className="text-white font-bold"
                                >
                                  {project.projectName}
                                </div>
                              ))} */}
                        </div>
                        <div className="w-[200px] border-r text-white font-bold">
                          no assigned team yet
                        </div>
                        <div className="w-[150px] border-r text-white font-bold">
                          no project Name
                        </div>
                        <div className="w-[150px] border-r text-white font-bold">
                          {task.name}
                        </div>
                        <div className="w-[130px] border-r text-white font-bold">
                          {task.status ? "false" : "true"}
                        </div>
                        <div className="w-[300px] border-r text-white">
                          {task.description}
                        </div>
                        <div className="w-[250px] border-r text-white">
                          {task.completed ? "Completed" : "Incomplete"}
                        </div>
                        <div
                          className="pl-5 w-[100px] text-white text-2xl border-r cursor-pointer"
                          onClick={() => handleDeleteTask(task._id)}
                        >
                          <MdDeleteForever />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllTaskView;
