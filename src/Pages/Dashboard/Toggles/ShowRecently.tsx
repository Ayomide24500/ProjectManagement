import pix from "../../../assets/om.jpeg";
import ProgressBar from "../../../components/ProgressBar";

const ShowRecently = () => {
  return (
    <div
      className="w-full h-[100%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4"
      style={{
        width: "100%",
        height: "78%",
        overflowY: "auto",
        scrollbarWidth: "thin",
      }}
    >
      <div className="w-[80%] lg:h-[55%] md:h-[80%] shadow-md bg-white rounded-lg p-4">
        <p className="text-[14px] font-bold">
          make a landing page and a mobile app
        </p>
        <div className="w-full h-14 mt-6 flex gap-0">
          <div className="w-10 h-10 object-cover flex rounded-full items-center justify-center border-none">
            <img
              className="w-full h-full object-cover rounded-full border"
              src={pix}
            />
          </div>
          <div className="w-10 h-10 object-cover flex rounded-full items-center justify-center border-none">
            <img
              className="w-full h-full object-cover rounded-full border"
              src={pix}
            />
          </div>
          <div className="w-10 h-10 object-cover flex rounded-full items-center justify-center border-none">
            <img
              className="w-full h-full object-cover rounded-full border"
              src={pix}
            />
          </div>
        </div>
        <div className="-mt-10">
          <p className="font-bold text-yellow-500 text-[18px] pt-12">
            Progress
          </p>
          <ProgressBar percentage={50} />
        </div>
      </div>
      <div className="w-[80%] lg:h-[55%] md:h-[80%] shadow-md bg-white rounded-lg p-4">
        <p className="text-[14px] font-bold">
          make a landing page and a mobile app
        </p>
        <div className="w-full h-14 mt-6 flex gap-0">
          <div className="w-10 h-10 object-cover flex rounded-full items-center justify-center border-none">
            <img
              className="w-full h-full object-cover rounded-full border"
              src={pix}
            />
          </div>
          <div className="w-10 h-10 object-cover flex rounded-full items-center justify-center border-none">
            <img
              className="w-full h-full object-cover rounded-full border"
              src={pix}
            />
          </div>
          <div className="w-10 h-10 object-cover flex rounded-full items-center justify-center border-none">
            <img
              className="w-full h-full object-cover rounded-full border"
              src={pix}
            />
          </div>
        </div>
        <div className="-mt-10">
          <p className="font-bold text-yellow-500 text-[18px] pt-12">
            Progress
          </p>
          <ProgressBar percentage={50} />
        </div>
      </div>
    </div>
  );
};

export default ShowRecently;
