import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Providers/AuthProvider";



const useInstructor = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { data: isInstructor = {}, isLoading } = useQuery(
    ["isInstructor"],
    async () => {
      const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
      return res.data;
    }
  );
  return [isInstructor, isLoading];
};

export default useInstructor;
