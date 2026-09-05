// useState is a React Hook used to store data that can change.
import { useState } from "react";

// Import our reusable components.
import StudentForm from "./components/StudentForm";
import StudentCard from "./components/StudentCard";

function App() {
  // State 1: stores the text typed in the student name input.
  const [name, setName] = useState("");

  // State 2: stores the text typed in the course input.
  const [course, setCourse] = useState("");

  // State 3: stores all students in an array.
  // We start with two students so students can immediately see some data.
  const [students, setStudents] = useState([
    { id: 1, name: "Ali", course: "React.js" },
    { id: 2, name: "Sara", course: "JavaScript" },
  ]);

  // This function runs when the Add Student form is submitted.
  function addStudent(event) {
    // Prevent the browser from refreshing the page after form submission.
    event.preventDefault();

    // Do not add a student if an input is empty.
    if (name.trim() === "" || course.trim() === "") {
      alert("Please enter student name and course.");
      return;
    }

    // Create one new student object from the input values.
    const newStudent = {
      id: Date.now(), // Simple unique id for this beginner demo.
      name: name,
      course: course,
    };

    // ...students copies the old students.
    // newStudent is then added to the end of the new array.
    setStudents([...students, newStudent]);

    // Clear both input fields after adding the student.
    setName("");
    setCourse("");
  }

  // This function removes one student using the student's id.
  function deleteStudent(id) {
    // filter() creates a new array without the selected student.
    const remainingStudents = students.filter((student) => student.id !== id);
    setStudents(remainingStudents);
  }

  return (
    <main className="app">
      <header className="header">
        <p className="lesson">React.js Learning Project</p>
        <h1>Student Management System</h1>
        <p>Learn state, forms, props, events, arrays and conditional rendering.</p>
      </header>

      {/* Pass state values and functions to StudentForm using props. */}
      <StudentForm
        name={name}
        course={course}
        setName={setName}
        setCourse={setCourse}
        addStudent={addStudent}
      />

      <section className="student-section">
        <div className="section-title">
          <h2>Students</h2>
          {/* students.length tells us how many students are in the array. */}
          <span>Total: {students.length}</span>
        </div>

        {/* Conditional rendering:
            If there are no students, show a message.
            Otherwise, show the list of students. */}
        {students.length === 0 ? (
          <p className="empty-message">No students added yet.</p>
        ) : (
          <div className="student-list">
            {/* map() goes through the array and creates one StudentCard
                component for every student. */}
            {students.map((student) => (
              <StudentCard
                key={student.id}
                student={student}
                deleteStudent={deleteStudent}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default App;