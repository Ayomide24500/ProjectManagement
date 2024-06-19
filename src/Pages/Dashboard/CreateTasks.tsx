import { useState } from "react";
import { createTask } from "../../Api/task";
import { useParams } from "react-router-dom";
import Button from "../../components/Button";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CreateTasks = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [description, setDescription] = useState("");
  const [taskName, setTaskName] = useState("");

  console.log(description);
  console.log(taskName);
  console.log("projectId:", projectId);

  const handlecreateTask = async () => {
    try {
      const createdTask = await createTask(projectId, {
        name: taskName,
        description: description,
      });
      console.log("Task created:", createdTask);

      Swal.fire({
        icon: "success",
        title: "Task Created!",
        text: "Your task has been successfully created.",
      }).then(() => {
        navigate("/dashboard");
      });
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <div
      className="shadow-lg p-5 min-h-full flex justify-center items-center"
      style={{ minHeight: "calc(100vh - 50px)", borderRadius: "20px" }}
    >
      <div className="h-[400px] lg:w-[40%] w-full flex items-center justify-center">
        <div className="h-[100%] w-[100%] flex justify-center items-center flex-col gap-16 bg-black p-4">
          <input
            type="text"
            title="name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Enter the task title"
            className="h-[50px] lg:w-[60%] w-[100%] border-2 outline-none border-yellow-500 pl-3"
          />
          <input
            type="text"
            title="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter the description"
            className="h-[100px] lg:w-[60%] w-full border-2 outline-none border-yellow-500 pl-3 pb-10"
          />
          <Button
            buttonName="create Task"
            bgColor=""
            color=""
            onClick={() => {
              handlecreateTask();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateTasks;
