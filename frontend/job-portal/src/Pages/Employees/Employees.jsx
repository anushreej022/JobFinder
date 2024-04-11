import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../../AdminNavbar/Navbar";
import { useDispatch } from "react-redux";
import { setUsers } from "../../features/users";

function Employees() {
  const type = useSelector((state) => state.type.value);
  const users = useSelector((state) => state.users.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    axios
      .get("http://localhost:8000/user/checkSession", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        if (!res.data.valid) {
          navigate("/");
        } else if (type.userType !== "Admin") {
          navigate("/forbidden");
        }

        axios.get("http://localhost:8000/user/getAll").then((res) => {
          dispatch(setUsers({ users: res.data }));
          console.log(users);
        });
      });
  });

  return (
    <div>
      <Navbar title="contact" />
      <div>Employees</div>;
    </div>
  );
}

export default Employees;
