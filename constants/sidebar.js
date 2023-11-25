import { BiHomeAlt, BiBrain } from "react-icons/bi";
import { BsClipboardData } from "react-icons/bs";
import { FaMagnifyingGlassDollar } from "react-icons/fa6";
import {
  TbBusinessplan,
  TbDeviceDesktopAnalytics,
  TbReportSearch,
} from "react-icons/tb";

const SidebarItems = [
  {
    id: "sidebar-home",
    label: "Home",
    icon: <BiHomeAlt className=" w-6 h-6" />,
    link: "/",
  },
  {
    id: "admissions",
    label: "Admissions",
    icon: <BsClipboardData className=" w-6 h-6" />,
    link: "/admissions",
  },
  {
    id: "fees",
    label: "Fees",
    icon: <TbBusinessplan className=" w-6 h-6" />,
    link: "/fees",
  },
  {
    id: "sidebar-reports",
    label: "Reports",
    icon: <TbReportSearch className=" w-6 h-6" />,
    link: "/reports",
  },
  {
    id: "growth-analysis",
    label: "Growth Analysis",
    icon: <TbDeviceDesktopAnalytics className=" w-6 h-6" />,
    link: "/growth-analysis",
  },
  {
    id: "staff-salary",
    label: "Staff Salary",
    icon: <FaMagnifyingGlassDollar className=" w-6 h-6" />,
    link: "/staff-salary",
  },
  ,
];

export default SidebarItems;