import { useContext } from "react"
import FilterTeacher from "./../FilterTeacher/FilterTeacher"
import Teacher from "../Teacher/Teacher"
import { TeacherContext } from "../../context/TeacherContext/TeacherContext"
import styles from "./TeacherList.module.css"
const TeacherList = () => {
  const { result, clearAll } = useContext(TeacherContext)
  return (
    <div>
      <div className={styles.list}>
        <button className={styles.clearButton} onClick={() => clearAll()}>
          Clear
        </button>
        <FilterTeacher />
        <div className={styles.teachers}>
          {result.map((teach, i) => {
            return <Teacher {...teach} key={i} />
          })}
        </div>
      </div>
    </div>
  )
}
export default TeacherList
