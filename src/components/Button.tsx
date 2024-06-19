import { FC } from "react";

interface iButton {
  buttonName: string;
  onClick: any;
  bgColor: string;
  color: string;
}
const Button: FC<iButton> = ({ buttonName, onClick, bgColor, color }) => {
  return (
    <div>
      <button
        className={`${bgColor ? "" : "bg-black"} ${
          color ? "" : "text-white"
        } font-bold px-3 py-1 rounded-md mr-3 -mt-4 shadow-yellow-500 shadow-lg `}
        onClick={onClick}
      >
        {buttonName}
      </button>
    </div>
  );
};

export default Button;
