import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { useSelector } from "react-redux";
const AssignedTask = () => {
  const [isVisible, setIsVisible] = useState(true);
  // const [newProjectName, setNewProjectName] = useState("");

  const id = useSelector((state: any) => state.projectID);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
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
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "10px",
            background:
              " linear-gradient(90deg, rgba(34,30,15,0.8940826330532213) 0%, rgba(134,145,162,0.7120098039215687) 0%)",

            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          }}
        >
          <button
            onClick={toggleVisibility}
            className="lg:w-[10%] md:w-[20%] w-[37%] h-[50px] mb-10 text-[15px]  bg-yellow-500"
          >
            Handle go off
          </button>
          <div className="lg:min-h-[600px] h-[500px] p-5 lg:w-[25%] md:w-[60%] bg-white text-black w-[90%]">
            <div className="flex justify-between items-center">
              <h1 className="font-medium lg:text-xl lg:pl-6 pt-5 text-black">
                Add people to management
              </h1>
              <div className="font-bold text-black flex justify-end pr-4 pt-5">
                <MdMenu />
              </div>
            </div>
            <div className="text-gray items-center flex-col gap-10">
              <div className="flex mt-10">
                <label className="text-gray font-medium lg:pl-6 pt-5 text-black lg:text-black">
                  Names or emails
                </label>
              </div>
              <input
                type="text"
                placeholder="e.g Maria, maria@compnay.com"
                className="lg:w-[80%] w-[100%] h-[48px] pl-5 lg:ml-7 mt-4 rounded-md outline-none border-gray-300 border-2 text-[13px]"
              />
              <p className="text-[15px] pt-10 lg:pl-6 text-black">
                input their email here ☝️ so they can view what is assigned to
                so they can access it
              </p>
            </div>
            <div className="flex flex-col gap-6 h-[50%] w-full justify-end">
              <p className="text-[11px] pl-5 pb-5 font-medium text-black">
                This site is protected by reCAPTCHA and the Google Privacy
                Policy and Terms of Service apply. Add
              </p>
              <div className="flex justify-end mb-10">
                <button className="lg:w-[15%] w-[30%] h-12 bg-black text-white font-medium mr-5 lg:mb-0 mb-6">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default AssignedTask;
