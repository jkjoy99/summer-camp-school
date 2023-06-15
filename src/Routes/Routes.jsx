import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import AdminRoute from "../Routes/AdminRoute";
import ManageClasses from "../Pages/Dashboard/ManageClasses";
// import EnrolledClass from "../pages/Dashboard/EnrolledClass";
import InstructorRoute from "./InstructorRoute";
import PrivateRoute from "./PrivateRoute";
import ManageUsers from "../Pages/Dashboard/ManegeUsers";
import MyClass from "../Pages/Dashboard/MyClass";
import AddClasses from "../Pages/Dashboard/AddClasses";
import Classes from "../Pages/Classes/Classes";
import Instructor from "../Pages/Instructor/Instructor";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Payment from "../Pages/Dashboard/Payment/Payment";
import SelectedClass from "../Pages/Dashboard/SelectedClass";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import EnrolledClass from "../Pages/Dashboard/EnrolledClass";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path: "instructor",
          element: <Instructor></Instructor>,
          loader: () =>
            fetch("http://localhost:5000/instructor"),
        },
        {
          path: "classes",
          element: <Classes></Classes>,
          loader: () =>
            fetch("http://localhost:5000/approved"),
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        }
      ]
    },

    {
      path: "dashboard",
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: "manageusers",
          element: (
            <AdminRoute>
              <ManageUsers />,
            </AdminRoute>
          ),
        },
  
        {
          path: "manageclasses",
          element: (
            <AdminRoute>
              <ManageClasses></ManageClasses>
            </AdminRoute>
          ),
          loader: () =>
            fetch("http://localhost:5000/classes"),
        },
        {
          path: "myclass",
          element: (
            <InstructorRoute>
              <MyClass />,
            </InstructorRoute>
          ),
        },
        {
          path: "payment/:id",
          element:<Payment></Payment>
        },
        
        {
          path: "addclass",
          element: (
            <InstructorRoute>
              <AddClasses></AddClasses>
            </InstructorRoute>
          ),
        },
        {
          path: "selectedclass",
          element: (
            <PrivateRoute>
              <SelectedClass></SelectedClass>
            </PrivateRoute>
          ),
        },
        {
          path: "enrolledclass",
          element: (
            <PrivateRoute>
              <EnrolledClass />
            </PrivateRoute>
          ),
        },
        {
          path: "payment-history",
          element: (
            <PrivateRoute>
              <PaymentHistory/>
            </PrivateRoute>
          ),
        },
      ],
    },
    {
      path: "*",
      element: <ErrorPage></ErrorPage>,
    },
  ]);
  
