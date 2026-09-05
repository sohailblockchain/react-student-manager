// This is a reusable component.
// It receives student information and the delete function through props.
function StudentCard({ student, deleteStudent }) {
  return (
    <div className="student-card">
      <div>
        {/* Display data received from App.jsx. */}
        <h3>{student.name}</h3>
        <p>Course: {student.course}</p>
      </div>

      {/* Send this student's id to deleteStudent when the button is clicked. */}
      <button
        className="delete-button"
        onClick={() => deleteStudent(student.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default StudentCard;