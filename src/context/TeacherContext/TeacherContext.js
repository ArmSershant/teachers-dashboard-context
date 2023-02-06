import React, { useEffect } from "react"
import { useState } from "react"
export const TeacherContext = React.createContext()
export const TeacherContextProvider = (props) => {
  const skills = [
    "HTML",
    "CSS",
    "JS",
    "REACT",
    "ANGULAR",
    "NODE",
    "C#",
    "OOP",
    "WPF",
    "SQL",
    "Algorithms",
    "PYTHON",
    "DJANGO",
    "JAVA",
  ]
  const [teacher, setTeacher] = useState({ name: "", age: "", skills: [] })
  const [error, setError] = useState("")
  const [teachers, setTeachers] = useState([])
  const [result, setResult] = useState([])
  const [text, setText] = useState("")
  
  const addSkill = (name) => {
    let skills = teacher.skills
    if (!teacher.skills.includes(name)) {
      teacher.skills.push(name)
    }
    setTeacher({ ...teacher, skills })
  }
  const add = (t) => setTeachers([...teachers, t])
  const addNewTeacher = (e) => {
    e.preventDefault()
    if (!teacher.name.trim() || !teacher.age.trim()) {
      setError("Please fill all the fields")
    } else if (teacher.skills.length === 0) {
      setError("Teacher should have at least one skill")
    } else {
      setError("")
      add(teacher)
      setTeacher({ name: "", age: "", skills: [] })
      e.target.reset()
    }
  }
  const clearAll = () => {
    setTeachers([])
    setResult([])
  }
  const searchByName = (e) => {
    setTeachers([
      ...teachers.filter((teach) => 
      teach.skills.filter((elm) => (elm.name = e.target.value))
      ),
    ])
  }
  
  useEffect(() => {
    if (!text) {
      setResult(teachers)
    } else {
      setResult([...teachers.filter(a => a.name.includes(text))])
      
    }
  }, [text, teachers])

  return (
    <TeacherContext.Provider
      value={{
        skills,
        teacher,
        setTeacher,
        teachers,
        setTeachers,
        error,
        setError,
        result,
        addSkill,
        addNewTeacher,
        clearAll,
        searchByName,
        text,
        setText
      }}
    >
      {props.children}
    </TeacherContext.Provider>
  )
}
