import React, { useEffect, useState } from "react";

const Student = () => {
  // State to manage if input is focused
  const [isNameFocused, setNameFocused] = useState(false);
  const [isAddressFocused, setAddressFocused] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [students, setStudents] = useState([]);

  const handleClick = (e) => {
    e.preventDefault()
    const student = {name,address}
    console.log(student)
    fetch("http://localhost:8080/student/add", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(student)

    }).then(() =>{
        console.log("New student added")
    })
  }


  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("http://localhost:8080/student/getAll");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setStudents(result);
      } catch (error) {
        console.error("Fetching students failed: ", error);
      }
    };

    fetchStudents();
  }, []);


  return (
    <div className="flex flex-col justify-center items-center py-8">
      <div className="w-full max-w-md p-8 shadow-xl rounded-lg bg-white">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Add Student</h2>
        <div className="flex flex-col space-y-4">
          {/* Student Name Input */}
          <label className="relative transition-colors">
            <input
              className="px-4 py-2 w-full rounded border-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-all duration-300 shadow-sm"
              type="text"
              placeholder="Student Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={() => setNameFocused(true)}
              onBlur={() => setNameFocused(false)}
              

            />
            {isNameFocused && (
              <span className="absolute top-0 left-3 px-1 -translate-y-1/2 transform bg-white text-blue-500 text-sm">
                Student Name
              </span>
            )}
          </label>

          {/* Student Address Input */}
          <label className="relative transition-colors">
            <input
              className="px-4 py-2 w-full rounded border-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-all duration-300 shadow-sm"
              type="text"
              placeholder="Student Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              onFocus={() => setAddressFocused(true)}
              onBlur={() => setAddressFocused(false)}
            />
            {isAddressFocused && (
              <span className="absolute top-0 left-3 px-1 -translate-y-1/2 transform bg-white text-blue-500 text-sm">
                Student Address
              </span>
            )}
          </label>

          <button className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition duration-300"
          onClick={handleClick}>
            Add Student
          </button>
        </div>
      </div>

      <div className="w-full max-w-md mt-8">
        <h3 className="text-xl font-bold text-center text-blue-600 mb-4">Students</h3>
        <div className="space-y-2">
          {students.map((student, index) => (
            <div key={index} className="px-6 py-4 shadow-sm rounded-lg bg-gray-100 border-2 border-gray-400">
              <p><strong>Id:</strong> {student.id}</p>
              <p><strong>Name:</strong> {student.name}</p>
              <p><strong>Address:</strong> {student.address}</p>
            </div>
          ))}
        </div>
      </div>
      

    </div>
  );
};

export default Student;





