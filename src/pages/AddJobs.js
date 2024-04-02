// src/pages/AddJobs.js

import React, { useState } from 'react';
import axios from 'axios';

const AddJobs = () => {
    const [formData, setFormData] = useState({
        companyName: '',
        jobTitle: '',
        description: '',
        salary: ''
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.post('/create/job', formData);
            console.log('Job created:', response.data);
            // Optionally, redirect to another page or show a success message
        } catch (error) {
            console.error('Error creating job:', error.response.data.error);
            // Handle error, show error message to the user
        }
    };

    return (
        <div>
            <h2>Add Jobs</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Company Name:</label>
                    <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required />
                </div>
                <div>
                    <label>Job Title:</label>
                    <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} required />
                </div>
                <div>
                    <label>Salary:</label>
                    <input type="number" name="salary" value={formData.salary} onChange={handleChange} required />
                </div>
                <button type="submit">Add Job</button>
            </form>
        </div>
    );
};

export default AddJobs;
