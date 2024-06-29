import {
  FaArrowLeft,
  FaArrowRight,
  FaClosedCaptioning,
  FaEnvelopeOpenText,
  FaRProject,
} from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeMenuState, changeToggle, logOut } from "../global/reduxState";
import { NavLink } from "react-router-dom";
import { MdDashboard, MdLogout, MdSmartDisplay, MdTask } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
const Sidebar = () => {
  const dispatch = useDispatch();
  const readToggle = useSelector((state: any) => {
    return state.toggle;
  });

  const handleToggleMenuFalse = () => {
    if (!document.startViewTransition) {
      dispatch(changeMenuState(false));
    } else {
      document.startViewTransition(() => {
        dispatch(changeMenuState(false));
      });
    }
  };

  return (
    <div
      className={`transition-all z-40 duration-300 fixed border-r h-[100vh] bg-white shadow-md lg:block md:hidden hidden`}
      style={{
        width: `${readToggle ? "240px" : "70px"}`,
      }}
    >
      <div className="m-3">
        {readToggle ? (
          <div
            className="cursor-pointer"
            onClick={() => {
              dispatch(changeToggle(false));
            }}
          >
            <FaArrowLeft size={20} />
          </div>
        ) : (
          <div
            className="cursor-pointer"
            onClick={() => {
              dispatch(changeToggle(true));
            }}
          >
            <FaArrowRight size={20} />
          </div>
        )}
      </div>
      <div className="h-[90%] flex flex-col">
        <div className="text-[32px] font-bold w-full pl-3 pt-4 ">
          <FaRProject />
        </div>
        <div className="h-[80%] w-full flex justify-center items-center flex-col gap-5">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "duration-500 transition-all p-5 rounded-sm bg-black text-yellow-400 cursor-pointer font-medium my-[3px] text-xl flex items-center justify-between"
                : "duration-500 transition-all p-2 rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
            }
            onClick={handleToggleMenuFalse}
          >
            <MdDashboard />
          </NavLink>

          <NavLink
            to="viewAllTask"
            className={({ isActive }) =>
              isActive
                ? "duration-500 transition-all p-5 rounded-sm bg-black text-yellow-400 cursor-pointer font-medium my-[3px] text-xl flex items-center justify-between"
                : "duration-500 transition-all p-2 rounded-sm bg-yellow-400 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between text-2xl "
            }
            onClick={handleToggleMenuFalse}
          >
            <MdTask />
          </NavLink>
        </div>
        <div className="flex-1" />
        <div
          className="mb-4 py-4 px-2 flex items-center justify-center transition-all duration-300 hover:bg-black hover:text-white bg-yellow-500 "
          onClick={() => {
            dispatch(logOut());
          }}
        >
          <MdLogout />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
