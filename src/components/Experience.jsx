import React, { useEffect, useState } from "react";
import "../css/Experience.css";
function Experience() {
  const [jobs, setJobs] = useState([]);

  async function getAllJobs() {
    try {
      const response = await fetch("/jobs.json");
      const data = await response.json();
      setJobs(await data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(function () {
    getAllJobs();
  }, []);

  return (
    <div id="exp" className="container my-5 text-white">
      <h1>Experience</h1>
      <hr />
      {jobs.map((job, index) => (
        <div className="exp-line my-4 " key={index}>
          <div className="job ms-2">
            <div className="job-role fw-medium fs-2">{job.role}</div>
            <div className="job-company fs-4 text-decoration-underline">
              {job.company}
            </div>
            <div className="job-description fs-5">{job.description}</div>
            <div className="job-duration fw-light">{job.duration}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Experience;
