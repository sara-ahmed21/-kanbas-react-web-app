import React, { useEffect, useState } from "react";
import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;

function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
  const ASSIGNMENT_URL = `${API_BASE}/a5/assignment`;
  const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios
      .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);


  const [module, setModule] = useState({
    id: 1, 
    name: "NodeJS",
    description: "Create a NodeJS server with ExpressJS",
    course: "20211010"
  });
  const MODULE_URL = `${API_BASE}/a5/module`;

  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      
      <input onChange={(e) => setAssignment({
            ...assignment, title: e.target.value })}
        value={assignment.title} type="text" />
      <button className="btn btn-primary" onClick={updateTitle} >
        Update Title to: {assignment.title}
      </button>
      <button className="btn btn-primary" onClick={fetchAssignment} >
        Fetch Assignment
      </button>


      <a className="btn btn-primary"
      href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
        Update Title
      </a> 
      <input type="text" 
        onChange={(e) => setAssignment({ ...assignment,
            title: e.target.value })}
        value={assignment.title}/><br/>

      <input type="number" 
        onChange={(e) => setAssignment({ ...assignment,
            score: parseInt(e.target.value) })}
        value={assignment.score}/>

      <a className="btn btn-primary"
      href={`${ASSIGNMENT_URL}/title/${assignment.score}`}>
        Update Score 
      </a><br/>

      <input type="checkbox" 
        onChange={(e) => setAssignment({ ...assignment,
            completed: e.target.value == "true"})}
        value={assignment.completed.toString()}/>

      <a className="btn btn-primary"
      href={`${ASSIGNMENT_URL}/title/${assignment.completed}`}>
        Update Completed
      </a>


      <h4>Retrieving Objects</h4>
      <a className="btn btn-primary"
      href="http://localhost:4000/a5/assignment">
        Get Assignment
      </a>



      <h4>Retrieving Properties</h4>
      <a className="btn btn-primary"
      href="http://localhost:4000/a5/assignment/title">
        Get Title
      </a>


      <h4>Module</h4>
      <a className="btn btn-primary"
      href="http://localhost:4000/a5/module">
        Get Module
      </a> <br/>
      <a className="btn btn-primary"
      href="http://localhost:4000/a5/module/name">
        Get Module Name
      </a> <br/>

      <input type="text" 
        onChange={(e) => setModule({ ...module,
            name: e.target.value })}
        value={module.name}/> <br/>

      <a className="btn btn-primary"
      href={`${MODULE_URL}/title/${module.name}`}>
        Update Name
      </a> <br/>


      <input type="text" 
        onChange={(e) => setModule({ ...module,
            description: e.target.value })}
        value={module.description}/> <br/>

      <a className="btn btn-primary"
      href={`${MODULE_URL}/title/${module.description}`}>
        Update Description
      </a>

    </div>
  );
}
export default WorkingWithObjects;