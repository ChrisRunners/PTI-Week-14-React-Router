import { Outlet } from "react-router-dom";

const UsersLayout = () => {
  return (
    <div>
      <h2>Daftar Anomali</h2>
      <Outlet />  {}
    </div>
  );
};

export default UsersLayout;
