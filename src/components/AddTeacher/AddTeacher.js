import { useContext } from "react"
import { TeacherContext } from "../../context/TeacherContext/TeacherContext"
import styles from "./AddTeacher.module.css"
const AddTeacher = () => {
  const { skills, teacher, setTeacher, error, addSkill, addNewTeacher } =
    useContext(TeacherContext)
  return (
    <div>
      <form onSubmit={addNewTeacher} className={styles.container}>
        <p className={styles.error}>{error}</p>
        <h1 className={styles.title}>AddTeacher</h1>
        <div className={styles.inputs}>
          <input
            className={styles.in}
            type="text"
            value={teacher.name}
            onChange={(e) => setTeacher({ ...teacher, name: e.target.value })}
            placeholder="Name"
          />
        </div>
        <div className={styles.inputs}>
          <input
            className={styles.in}
            type="number"
            value={teacher.age}
            onChange={(e) => setTeacher({ ...teacher, age: e.target.value })}
            placeholder="Age"
          />
        </div>
        <div className={styles.inputs}>
          <label>Choose Skills</label>
          <select
            onChange={(e) => {
              addSkill(e.target.value)
            }}
          >
            {skills.map((skill, i) => {
              return (
                <option value={skill} key={i}>
                  {skill}
                </option>
              )
            })}
          </select>
          <ul>
            {teacher.skills.map((elm, index) => {
              return <li key={index}>{elm}</li>
            })}
          </ul>
          <button className={styles.addButton} type="submit">Add</button>
        </div>
      </form>
    </div>
  )
}
export default AddTeacher
