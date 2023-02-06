import { useContext } from "react"
import { TeacherContext } from "../../context/TeacherContext/TeacherContext"
import styles from "./FilterTeacher.module.css"
const FilterTeacher = () => {
  const { text,setText } = useContext(TeacherContext)
  return (
    <div className={styles.search}>
      <input
        className={styles.in}
        type="search"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="search for teacher..."
      />
    </div>
  )
}
export default FilterTeacher
