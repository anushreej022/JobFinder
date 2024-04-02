// src/pages/JobsPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const JobsPage = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        // Fetch jobs from the server when the component mounts
        fetchJobs();
    }, []);

    const fetchJobs = async () => {
        try {
            const response = await axios.get('/get/jobs');
            setJobs(response.data);
        } catch (error) {
            console.error('Error fetching jobs:', error.response.data.error);
            // Handle error, show error message to the user
        }
    };

    return (
        <div>
            <h2>Available Jobs</h2>
            <ul>
                {jobs.map(job => (
                    <li key={job._id}>
                        <strong>{job.jobTitle}</strong> - {job.companyName} - ${job.salary}
                        <p>{job.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobsPage;
