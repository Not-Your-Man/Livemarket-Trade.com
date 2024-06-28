import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const useProtectedAdmin = () => {
  const history = useHistory();
  const isAdmin = useSelector((state) => state.Login.admin_details);
  console.log("is admin????", isAdmin);
  useEffect(() => {
    if (!isAdmin) {
      history.push("/Admin/admin-login");
    }
  });
  return isAdmin;
};

export default useProtectedAdmin;
