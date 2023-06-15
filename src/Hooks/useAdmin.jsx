import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const useAdmin = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const { data: isAdmin = {}, isLoading } = useQuery(["isAdmin"], async () => {
    const res = await axiosSecure.get(`/users/admin/${user?.email}`);
    return res.data;
  });
  return [isAdmin, isLoading];
};

export default useAdmin;
