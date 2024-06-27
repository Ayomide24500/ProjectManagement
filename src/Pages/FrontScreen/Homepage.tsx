import { TypeAnimation } from "react-type-animation";
// import { AiOutlineMail } from "react-icons/ai";
import hero from "../../assets/download.png";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="h-[100%] bg-[rgb(16,25,53)] z-10">
      <div>
        <div className="w-full lg:min-h-[200px] flex flex-col lg:flex-row justify-around items-center gap-7 mt-[70px] p-9">
          <div className="h-[700px] w-full flex justify-center items-center relative lg:h-[800px]">
            <div className="absolute inset-0 lg:bg-transparent bg-black bg-opacity-50"></div>
            <div className="relative h-full w-full flex flex-col justify-center items-center z-10 p-5">
              <div className="h-[7%] lg:w-[50%] lg:text-[19px] text-[12px] w-[100%] lg:mr-0 border-2 text-white border-yellow-500 flex justify-center items-center rounded-[30px] font-semibold mt-9">
                Best Project Management Tool
              </div>
              <div
                className="w-[80%] 
              text-white font-mono font-bold lg:text-[50px] text-[20px] mt-[20px]"
              >
                <TypeAnimation
                  sequence={[
                    "Manage",
                    1000,
                    "Monitor",
                    1000,
                    "Assign",
                    1000,
                    "Improve",
                    1000,
                  ]}
                  repeat={Infinity}
                  className="font-mono font-bold lg:text-[50px] pt-5 text-[20px]"
                />{" "}
                All your projects in one place
              </div>
              <div className="w-[80%] mb-[20px] text-gray-300 pt-5 text-[12px] lg:text-[20px]">
                View plans, Track Progress, Increase Productivity and Improve
                Communication with Projectile
              </div>
              <div className="h-[16%] w-[70%] mb-[40px] lg:flex lg:justify-start gap-4 lg:items-center rounded-[8px] font-semibold mt-5">
                <input
                  type="text"
                  placeholder="Enter your email here"
                  className="lg:h-[40%] h-5 mb-9 lg:w-[50%] w-full outline-none text-black pl-2 rounded text-[14px] lg:flex hidden"
                />
                <Link to="/signup">
                  <button className="w-[120px] h-[48px] bg-yellow-500 flex justify-center mb-9 items-center rounded-lg">
                    Get Started
                  </button>
                </Link>
              </div>
              <div className="lg:mt-20  ">
                ⭐⭐⭐⭐⭐
                <div className="text-gray-300 pt-4">
                  "Easily the best project management software on the <br />{" "}
                  market, right now."
                </div>
                <div className="text-white font-bold pt-4">Habeeb - C.T.O</div>
              </div>
            </div>
          </div>
          <div className="h-[800px] w-full lg:flex lg:justify-center lg:items-center hidden ">
            <img src={hero} alt="" className="h-[80%] w-[100%]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
