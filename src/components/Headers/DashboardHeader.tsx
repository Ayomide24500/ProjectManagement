// import userHook from "../../hook/userHook";

const Header = () => {
  //   const { data }: any = userHook();

  return (
    <div className="w-[100%] h-[50px] bg-black lg:flex lg:justify-end lg:fixed">
      <div className="font-bold pt-5 text-yellow-500 pl-7 lg:pr-28 lg:pl-10 lg:text-[16px] text-[10px]">
        Welcome Back User , allow this platform make your day
      </div>
    </div>
  );
};
export default Header;
