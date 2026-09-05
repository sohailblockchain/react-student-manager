# React Student Manager

A simple React.js learning project for beginners. The application allows students to add and delete student records while learning important React concepts.

## Learning Objectives

After completing this project, students should understand:

- `useState` and state management
- Controlled input fields
- `onChange` and `onSubmit` events
- React props
- Reusable components
- Arrays and `.map()`
- `.filter()` for deleting data
- Conditional rendering
- Basic form validation

## Project Structure

```text
react-student-manager/
├── src/
│   ├── components/
│   │   ├── StudentForm.jsx
│   │   └── StudentCard.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## How the Application Works

```text
User types name/course
        ↓
onChange updates state
        ↓
User clicks Add Student
        ↓
onSubmit calls addStudent()
        ↓
New object is added to students array
        ↓
map() creates StudentCard components
        ↓
React updates the UI
```

## Run the Project

```bash
git clone https://github.com/sohailblockchain/react-student-manager.git
cd react-student-manager
npm install
npm run dev
```

Open the local URL shown by Vite in your browser.

## Important Code Concepts

### State

```jsx
const [name, setName] = useState("");
const [students, setStudents] = useState([]);
```

State stores data that can change in the application.

### Input Event

```jsx
onChange={(e) => setName(e.target.value)}
```

When the user types, `onChange` updates the state.

### Display an Array

```jsx
students.map((student) => (
  <StudentCard key={student.id} student={student} />
))
```

`map()` creates one component for each item in an array.

### Conditional Rendering

```jsx
students.length === 0
  ? <p>No students added yet.</p>
  : <StudentList />
```

React can display different UI depending on a condition.

## Classroom Practice

Try these exercises after understanding the project:

1. Add an `email` field to each student.
2. Add an `age` field.
3. Change the button text and page title.
4. Add an Edit button.
5. Add a search box to search students by name.

## Lecture Sequence

Recommended teaching order:

1. Review components and props.
2. Explain `useState`.
3. Explain controlled inputs and `onChange`.
4. Explain form submission and `preventDefault()`.
5. Create a student object.
6. Add the object to an array.
7. Use `map()` to display students.
8. Use conditional rendering.
9. Use `filter()` to delete a student.

---

Created as a beginner-friendly React.js classroom project by **Sohail Ahmed**.