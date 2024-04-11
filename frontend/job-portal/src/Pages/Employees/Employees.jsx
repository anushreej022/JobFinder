import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../../AdminNavbar/Navbar";
import { useDispatch } from "react-redux";
import { setUsers } from "../../features/users";
import { Typography, Table, TableHead, TableBody, TableRow, TableCell } from "@mui/material";
import "./Employees.css";

function Employees() {
  const { users } = useSelector((state) => state.users.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = sessionStorage.getItem("token");

    axios
      .get("http://localhost:8000/user/checkSession", {
        headers: {
          Authorization: "Bearer " + token,
          "User-Type": "Admin",
        },
      })
      .then((res) => {
        if (!res.data.valid) {
          navigate("/");
        } else if (!res.data.userMatch) {
          navigate("/employeeForbidden");
        }
        axios.get("http://localhost:8000/user/getAll").then((res) => {
          dispatch(setUsers({ users: res.data }));
        });
      });
  }, []);

  return (
    <div>
      <Navbar title="adminHome" />
      <div>
        <Typography variant="h2" className="user-header">User List</Typography>
        <div className="table-container">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Type</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.email}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.type}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default Employees;
