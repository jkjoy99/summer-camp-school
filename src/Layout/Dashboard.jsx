import { NavLink, Outlet } from "react-router-dom";
import "./Dashboard.css";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";
import { FaHome, } from "react-icons/fa";
import { GiWallet } from 'react-icons/gi';
import { GrCheckboxSelected } from 'react-icons/gr';
import { TbBrandBooking } from 'react-icons/tb';
import { BsFillHouseDoorFill, BsFillCalendarWeekFill, BsFillPersonPlusFill } from 'react-icons/bs';

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            <div className="mx-auto">
              <img src="https://as1.ftcdn.net/v2/jpg/05/60/63/32/1000_F_560633236_TVV7yZeu1OofG70GMpKg78vkVzoUpWRN.jpg" alt="" className='w-[70px] h-[70px] rounded-full' />
            </div>

            <div className="divider"></div>

            {isAdmin?.admin ? (
              <>
                <li className="p-3 bg-purple-600 hover:bg-purple-700 text-white mb-5 list-none">
                  <NavLink className="flex justify-center items-center mr-3" to="/dashboard/manageclasses">
                    <BsFillHouseDoorFill />
                    Manage Classes
                  </NavLink>
                </li>
                <li className="p-3 bg-purple-600 hover:bg-purple-700 text-white list-none">
                  <NavLink className="flex justify-center items-center mr-3" to="/dashboard/manageusers">
                    <BsFillHouseDoorFill />
                    Manage Users</NavLink>
                </li>
                <div className="divider"></div>
                <li className="p-3 mt-5 bg-purple-600 hover:bg-purple-700 text-white mb-5 list-none">

                  <NavLink className="flex justify-center items-center mr-3" to="/">
                    <FaHome className="mr-2" />
                    Home
                  </NavLink>
                </li>
              </>
            ) : isInstructor?.instructor ? (
              <>
                <li className="p-3 bg-purple-600 hover:bg-purple-700 text-white mb-5 list-none">
                  <NavLink className="flex justify-center items-center mr-3" to="/dashboard/addclass">
                    <BsFillHouseDoorFill />
                    Add a Class</NavLink>
                </li>
                <li className="p-3 bg-purple-600 hover:bg-purple-700 text-white list-none">
                  <NavLink className="flex justify-center items-center mr-3" to="/dashboard/myclass">
                    <BsFillHouseDoorFill />
                    My Classes</NavLink>
                </li>
                <div className="divider"></div>
                <li className="p-3 mt-5 bg-purple-600 hover:bg-purple-700 text-white mb-5 list-none">

                  <NavLink className="flex justify-center items-center mr-3" to="/">
                    <FaHome className="mr-2" />
                    Home
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="p-3 bg-purple-600 hover:bg-purple-700 text-white mb-5 list-none">
                  <NavLink className="flex justify-center items-center mr-3" to="/dashboard/selectedclass">
                    {/*  */}
                    <GrCheckboxSelected className="bg-lime-500 "></GrCheckboxSelected>
                    My Selected Classes
                  </NavLink>
                </li>
                <li className="p-3 bg-purple-600 hover:bg-purple-700 text-white mb-5 list-none">
                  <NavLink className="flex justify-center items-center mr-3" to="/dashboard/enrolledclass">
                    <TbBrandBooking />
                    My Enrolled Classes
                  </NavLink>
                </li>

                <li className="p-3 bg-purple-600 hover:bg-purple-700 text-white list-none">
                  <NavLink className="flex justify-center items-center mr-3" to="/dashboard/payment-history">
                    <GiWallet />
                    Payment History
                  </NavLink>
                </li>
                <div className="divider"></div>
                <li className="p-3 bg-purple-600 hover:bg-purple-700 text-white mb-5 list-none">

                  <NavLink className="flex justify-center items-center mr-3" to="/">
                    <FaHome className="mr-2" />
                    Home
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
