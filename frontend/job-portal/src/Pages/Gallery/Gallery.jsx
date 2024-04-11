import React, { useEffect, useState } from "react";
import { Grid, Card, CardMedia } from "@mui/material";
import Navbar from "../../EmployeeNavbar/Navbar";
import "./Gallery.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CompanyShowcase = () => {
  const [imagePaths, setImagePaths] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const type = useSelector((state) => state.type.value);

  useEffect(() => {
    axios.get("http://localhost:8000/user/checkSession").then((res) => {
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
          } else if (type.userType !== "Employee") {
            navigate("/forbidden");
          }
        })
        .catch((error) => {
          navigate("/");
        });
    });

    axios
      .get("http://localhost:8000/user/getImages")
      .then((response) => {
        setImagePaths(response.data);
      })
      .catch((error) => {
        console.error("Error fetching image paths:", error);
        setError("Error fetching image paths");
      });
  }, [navigate]);

  return (
    <div>
      <Navbar title="gallery" />
      <h2 className="header">Company Showcase</h2>
      <div className="image-grid">
        <Grid container spacing={2}>
          {imagePaths.map((imagePath, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="250"
                  src={imagePath}
                  alt={imagePath}
                  key={index}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default CompanyShowcase;
