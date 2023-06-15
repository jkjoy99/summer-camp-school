import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import useInstructor from "../Hooks/useInstructor";
import { AuthContext } from "../Providers/AuthProvider";


const InstructorRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  const [isInstructor, isLoading] = useInstructor();
  if (user && isInstructor.instructor) {
    return children;
  }

  if (loading || isLoading) {
    return <progress className="progress w-56"></progress>;
  }



  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;
