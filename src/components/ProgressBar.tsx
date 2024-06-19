import { FC } from "react";

interface iPro {
  percentage: any;
}
const ProgressBar: FC<iPro> = ({ percentage }) => {
  const bgColor = `bg-${percentage > 50 ? "green" : "red"}-500`;

  return (
    <div className="mt-3">
      <div className="flex justify-end font-bold">50%</div>
      <div
        className="h-3 w-full bg-yellow-500 rounded-lg mt-9"
        style={{ borderRadius: "40px" }}
      >
        <div
          className={`h-full rounded-lg bg-black ${bgColor}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
