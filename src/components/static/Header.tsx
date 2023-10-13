import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const [shown, setshown] = useState<boolean>(false);
  const toggle = () => {
    setshown(!shown);
  };

  const [state, setState] = useState<boolean>(false);

  const dropDown = () => {
    setState(!state);
  };

  return (
    <div>
      <div className="w-full h-[70px] bg-[darkorange] flex justify-center items-center relative">
        <div className="w-[90%] h-full  flex justify-between items-center">
          <div className="text-[30px] font-bold shadow-sm">TodoAPP</div>
          <div className="flex gap-5 justify-center items-center ">
            <Link to="/">
            <div className="hover:cursor-pointer hover:underline small:hidden">
                Create
              </div>
            </Link>
            <Link to="/my-task">
              <div className="hover:cursor-pointer hover:underline small:hidden">
                My Task
              </div>
            </Link>
            <div
              className="ml-[5px] text-[24px] text-[black] small:flex hidden "
              onClick={toggle}
            >
              {shown ? (
                <div onClick={dropDown}>
                  <AiOutlineClose />
                </div>
              ) : (
                <div onClick={dropDown}>
                  <AiOutlineMenu />
                </div>
              )}
            </div>

            {state ? (
              <div className="h-[100px] w-[200px]  top-[90px] rounded-md absolute right-3 flex flex-col justify-between text-[white] font-semibold z-100 bg-[darkorange]">
                <Link to="/">
                  <div className="p-1 hover:bg-slate-300 hover:cursor-pointer duration-300 transition-all hover:text-black">
                    Create
                  </div>
                </Link>
                <Link to="/my-task">
                  <div className="p-1 hover:bg-slate-200 hover:cursor-pointer duration-300 transition-all hover:text-black">
                    My Task
                  </div>
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
    //   </div>
    // </div>
  );
};

export default Header;
