import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-[70px] w-full flex justify-center items-center top-0  bg-[#101935] fixed z-50">
      <div className="h-[50px] w-[85%] flex justify-between items-center gap-2">
        <div className="h-[100%] w-[70%] flex justify-start items-center">
          <div className="h-[100%] w-[40%] gap-4 flex justify-start items-center">
            <Link to="/" className="flex">
              <div className="h-[50px] w-[50px] rounded-[50%] bg-yellow-500 flex justify-center items-center font-bold text-white">
                TM
              </div>
            </Link>
            <div className="lg:text-[22px] lg:font-bold text-white flex">
              Task Management
            </div>
          </div>

          <div className="h-[100%] w-[50%] lg:flex lg:justify-end lg:items-center gap-7 text-[16px] font-semibold text-white hidden">
            <nav className="flex gap-1 hover:cursor-pointer">
              <div>Features</div>
            </nav>
            <Link to="/pricing" className=" hover:cursor-pointer">
              <nav> Pricing </nav>
            </Link>
            <div className=" hover:cursor-pointer">
              <nav>About us</nav>
            </div>
            <div className=" hover:cursor-pointer">
              <nav> Contact Us</nav>
            </div>
          </div>
        </div>

        <div className="h-[100%] w-[30%] flex justify-end items-center gap-2 ">
          <Link to="/signin">
            <button className="py-2 px-4 border border-gray-400 rounded-[8px] text-white font-[600] text-[16px] lg:block hidden">
              Log In
            </button>
          </Link>
          <Link to="/signup">
            <button className="lg:py-2 lg:px-4 p-1 rounded-[8px] bg-yellow-500 text-black lg:text-[16px] text-[12px] font-[700]">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
