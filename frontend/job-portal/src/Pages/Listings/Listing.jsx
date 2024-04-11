import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./Listing.css";
import Navbar from "../../EmployeeNavbar/Navbar";
import Card from "../../Components/Card";
import axios from "axios";
import { useSelector } from "react-redux";

function Listing() {
  const navigate = useNavigate();
  const type = useSelector((state) => state.type.value);

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
        } else if (type.userType !== "Employee") {
          navigate("/forbidden");
        }
      })
      .catch((error) => {
        navigate("/");
      });
  });

  const jobPosts = [
    {
      id: 1,
      title: "Full Stack Developer",
      description:
        "Join our dynamic team to work on cutting-edge technologies. Develop and maintain sophisticated web applications for our diverse client base.",
      lastUpdated: "Last updated 2 days ago",
      applyLink: "https://example.com/apply/full-stack-developer",
    },
    {
      id: 2,
      title: "Digital Marketing Specialist",
      description:
        "Elevate our digital marketing strategies to promote our innovative products. Proficiency in SEO, SEM, and social media marketing is highly valued.",
      lastUpdated: "Last updated 1 day ago",
      applyLink: "https://example.com/apply/digital-marketing-specialist",
    },
    {
      id: 3,
      title: "UX/UI Designer",
      description:
        "Shape engaging user experiences and create visually captivating designs. Work alongside cross-functional teams to turn ideas into reality.",
      lastUpdated: "Last updated 4 hours ago",
      applyLink: "https://example.com/apply/ux-ui-designer",
    },
    {
      id: 4,
      title: "Data Scientist",
      description:
        "Leverage advanced analytics and machine learning to uncover insightsm from vast data sets. Proficiency with Python and R is a must.",
      lastUpdated: "Last updated 3 days ago",
      applyLink: "https://example.com/apply/data-scientist",
    },
    {
      id: 5,
      title: "Customer Support Representative",
      description:
        "Deliver unparalleled customer service and support. Exceptional communication skills and a knack for solving problems are key responsiblities.",
      lastUpdated: "Last updated 6 hours ago",
      applyLink: "https://example.com/apply/customer-support-representative",
    },
    {
      id: 6,
      title: "Project Manager",
      description:
        "Guide and coordinate project teams, play a crucial role in planning, executing, and overseeing projects from initiation to completion.",
      lastUpdated: "Last updated 2 hours ago",
      applyLink: "https://example.com/apply/project-manager",
    },
  ];

  return (
    <div>
      <Navbar title="listing" />
      <div className="job-grid">
        {jobPosts.map((job) => (
          <Card
            key={job.id}
            title={job.title}
            description={job.description}
            lastUpdated={job.lastUpdated}
            applyLink={job.applyLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Listing;
