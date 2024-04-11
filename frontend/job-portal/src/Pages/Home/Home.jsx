import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Typography, Grid, Card, CardContent } from "@mui/material";
import Navbar from "../../EmployeeNavbar/Navbar";
import "./Home.css";
import axios from "axios";

function Home() {
  const testimonials = [
    {
      id: 1,
      author: "John Doe",
      text: "I found my dream job through this platform! The process was smooth, and I'm grateful for the opportunity.",
      image: "images/testimonial-1.jpg",
    },
    {
      id: 2,
      author: "Jane Smith",
      text: "As an employer, I've had great success in finding qualified candidates here. Highly recommend!",
      image: "images/testimonial-2.jpg",
    },
    {
      id: 3,
      author: "Emily Johnson",
      text: "I've been using this job platform for a few weeks now, and I'm impressed with the variety of job listings available.",
      image: "images/testimonial-3.jpg",
    },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    axios
      .get("http://localhost:8000/user/checkSession", {
        headers: {
          Authorization: "Bearer " + token,
          "User-Type": "Employee",
        },
      })
      .then((res) => {
        if (!res.data.valid) {
          navigate("/");
        } else if (!res.data.userMatch) {
          navigate("/adminForbidden");
        }
      })
      .catch((error) => {
        navigate("/");
      });
  });

  return (
    <>
      <Navbar title="home" />
      <h1 className="header">Testimonials</h1>
      <Grid container spacing={2} className="testimonials">
        {testimonials.map((testimonial) => (
          <Grid item xs={12} sm={4} key={testimonial.id}>
            <Card>
              <CardContent>
                <Avatar alt={testimonial.author} src={testimonial.image} sx={{ width: 100, height: 100, margin: "auto" }} />
                <Typography variant="body1" component="p">{testimonial.text}</Typography>
                <Typography variant="caption" component="p" className="author">- {testimonial.author}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default Home;
