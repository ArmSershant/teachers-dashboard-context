import "./App.css"
import AddTeacher from "./components/AddTeacher/AddTeacher"
import TeacherList from "./components/TeacherList/TeacherList"
import { TeacherContextProvider } from "./context/TeacherContext/TeacherContext"
function App() {
  return (
    <>
      <div id="main">
        <TeacherContextProvider>
          <AddTeacher />
          <TeacherList />
        </TeacherContextProvider>
      </div>
    </>
  )
}

export default App

