import React, { useEffect, useState } from "react";
import SidebarItems from "../../constants/sidebar";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoIosHelpCircleOutline, IoIosSettings } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa";
import Image from "next/image";

const Sidebar = () => {
  const router = useRouter();
  const { pathname } = router;
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if(isSidebarOpen) {
        setIsSidebarOpen(window.innerWidth >= 1080);
      }
    };

    // Initial setup
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`relative h-screen z-10  ${
        isSidebarOpen ? "w-[275px]" : "w-[114px]"
      }`}
    >
      <div className="fixed h-full flex flex-row bg-[url('/backgrounds/dashboard-noise.webp')] bg-no-repeat bg-cover bg-gray-100 ">
        <div
          className={`overflow-hidden h-full min-w-[16px] md:min-w-[82px] max-w-[243px] ${
            isSidebarOpen ? "w-[243px] " : "w-[82px]"
          }  `}
        >
          <div className="relative flex flex-col justify-between items-start h-full py-10 w-full">
            <div className="w-full">
              {/* Company Name */}
              <div className={`${isSidebarOpen ? "visible mb-9" : "hidden"} flex justify-center`}>
                <Image
                    src="/icon.png"
                    alt="LootMogul Logo"
                    width={60}
                    height={60}
                />
              </div>

              {/* Navigation  */}

              <div className="w-full overflow-y-auto overflow-x-hidden text-center ">
                {SidebarItems.map((item) => {
                  return (
                    <div key={item.id}>
                      <Link
                        href={item.link}
                        className={`${
                          isSidebarOpen
                            ? "flex justify-start items-center my-3 pr-0 "
                            : "inline-block mb-4 "
                        } cursor-pointer  hover:text-black hover:bg-gray-200 transition-colors duration-0 ease-in-out group ${
                          pathname == item.link
                            ? "text-white"
                            : "text-[#999999]"
                        } py-1 pl-7  w-full`}
                      >
                        <span
                          title={item.label}
                          className="group-hover:-scale-x-90 transition duration-300"
                        >
                          {item.icon}
                        </span>
                        {isSidebarOpen ? (
                          <p className="ml-3 font-medium text-sm text-left">
                            {item.label}
                          </p>
                        ) : null}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Footer */}
            <div className="w-full">
              <Link
                href={"/settings"}
                onClick={() =>
                  loggedUser.isGuest ? analysePage("Settings") : ""
                }
                className={`${
                  isSidebarOpen
                    ? "flex justify-start items-center my-2 pr-0"
                    : "inline-block"
                } cursor-pointer  hover:text-black hover:bg-gray-200 transition-colors duration-0 ease-in-out py-1  pl-7 w-full group ${
                  pathname == "/dashboard/settings"
                    ? "text-black"
                    : "text-[#999999]"
                }`}
              >
                <span
                  title={"Settings"}
                  className="group-hover:rotate-90 transition duration-300"
                >
                  <IoIosSettings className=" w-6 h-6" />
                </span>
                {isSidebarOpen ? (
                  <p className="ml-3 font-medium text-sm text-left">Settings</p>
                ) : null}
              </Link>
              <Link
                href={"/help"}
                onClick={() =>
                  loggedUser.isGuest ? analysePage("Help & Guidance") : ""
                }
                className={`${
                  isSidebarOpen
                    ? "flex justify-start items-center my-2 pr-0"
                    : "inline-block"
                } cursor-pointer group  hover:text-black hover:bg-gray-200 ease-in-out py-1  pl-7 w-full transition-colors duration-0 ${
                  pathname == "/help" ? "text-black" : "text-[#999999]"
                }`}
              >
                <span
                  title={"Help"}
                  className="group-hover:-scale-x-90 transition duration-300"
                >
                  <IoIosHelpCircleOutline className=" w-6 h-6" />
                </span>
                {isSidebarOpen ? (
                  <p className="ml-3 font-medium text-sm text-left">
                    Help & Guidance
                  </p>
                ) : null}
              </Link>
            </div>
          </div>
        </div>
        <div className={` h-full grid place-items-center  bg-white rounded-tl-3xl rounded-bl-3xl `}>
          <div className=" bg-gray-200 bg-[url('/backgrounds/dashboard-noise.webp')] bg-no-repeat bg-cover  rounded-r-full w-8 h-12 pt-3" onClick={toggleSidebar} >
            <FaAngleRight className={`text-[#999999] w-6 h-6`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;