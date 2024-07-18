import React, { useState } from "react";
import axios from "axios"; // Import Axios
import './StudentleaveForm.css';

const Students = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    yearofstudy: "",
    coursename: "",
    reason: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('api for postmaping to databases', formData);
      console.log('Form data sent:', response.data);
      alert('Form submitted successfully!');
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        yearofstudy: "",
        coursename: "",
        reason: ""
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      // Optionally, handle error and show an error message to the user
      alert('Error submitting form. Please try again.');
    }
  };

  return (
    <div className="form-container" style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto' }}>
      <h1>STUDENT LEAVE MANAGEMENT SYSTEM</h1>
      <h2>Leave Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="yearofstudy">Year of Study:</label>
          <input
            type="number"
            id="yearofstudy"
            name="yearofstudy"
            value={formData.yearofstudy}
            onChange={handleChange}
            min="1"
            max="5"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="coursename">Course Name:</label>
          <input
            type="text"
            id="coursename"
            name="coursename"
            value={formData.coursename}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="reason">Reason for Leave:</label>
          <textarea
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            placeholder="Enter your reason for leave..."
            required
          ></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Students;
