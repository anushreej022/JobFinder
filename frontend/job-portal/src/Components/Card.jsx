import "./Card.css";
import React from "react";
import { Button } from "@mui/material";
import { Link } from "@mui/icons-material";

function Card(props) {
  return (
    <div>
      <div className="job-card">
        <div className="desc">
          <h4>{props.title}</h4>
          <p>{props.description}</p>
          <p style={{ fontStyle: "italic" }}>{props.lastUpdated}</p>
          <Button
            variant="contained"
            color="primary"
            href="https://www.indeed.com/"
            target="_blank"
            rel="noopener noreferrer"
            endIcon={<Link />}
          >
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Card;
