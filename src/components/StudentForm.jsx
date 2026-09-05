// StudentForm receives values and functions from App.jsx through props.
function StudentForm({ name, course, setName, setCourse, addStudent }) {
  return (
    // onSubmit calls addStudent when the form is submitted.
    <form className="student-form" onSubmit={addStudent}>
      <h2>Add New Student</h2>

      <label>Student Name</label>
      <input
        type="text"
        placeholder="Enter student name"
        value={name}
        // onChange runs every time the user types in this input.
        // e.target.value gives us the current text from the input.
        onChange={(e) => setName(e.target.value)}
      />

      <label>Course</label>
      <input
        type="text"
        placeholder="Enter course name"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <button type="submit">Add Student</button>
    </form>
  );
}

// Export this component so we can import and use it in App.jsx.
export default StudentForm;