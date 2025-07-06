import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const AddProject = () => {
    const navigate = useNavigate()
  const [project, setProject] = useState({
    name: "",
    image: "",
    description: "",
    technologies: "",
    liveLink: "",
    clientRepo: "",
    challenges: "",
    futurePlans: "",
  });

  const handleChange = (e) => {
    setProject({ ...project, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const techArray = project.technologies.split(",").map((t) => t.trim());

    await axios
      .post("https://protfolio-server-amber.vercel.app/projects", {
        ...project,
        technologies: techArray,
      })
      .then((result) => {
        console.log(result);
        if (result?.data?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate('/')
      })
      .catch((error) => {
        console.log(error);
      });

    // if (response.data.insertedId) {
    //   alert("Project added successfully!");
    // }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-slate-800 text-white rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Project</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Project Name"
          onChange={handleChange}
          className="w-full p-2 rounded bg-slate-700"
          required
        />
        <input
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
          className="w-full p-2 rounded bg-slate-700"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          className="w-full p-2 rounded bg-slate-700"
          required
        />
        <input
          name="technologies"
          placeholder="Technologies (comma separated)"
          onChange={handleChange}
          className="w-full p-2 rounded bg-slate-700"
          required
        />
        <input
          name="liveLink"
          placeholder="Live Link"
          onChange={handleChange}
          className="w-full p-2 rounded bg-slate-700"
        />
        <input
          name="clientRepo"
          placeholder="GitHub Repo (Client)"
          onChange={handleChange}
          className="w-full p-2 rounded bg-slate-700"
        />
        <input
          name="challenges"
          placeholder="Challenges Faced"
          onChange={handleChange}
          className="w-full p-2 rounded bg-slate-700"
        />
        <input
          name="futurePlans"
          placeholder="Future Improvements"
          onChange={handleChange}
          className="w-full p-2 rounded bg-slate-700"
        />
        <button
          type="submit"
          className="w-full bg-indigo-600 py-2 rounded hover:bg-indigo-700"
        >
          Submit Project
        </button>
      </form>
    </div>
  );
};

export default AddProject;
