import styles from "./Teacher.module.css"
const Teacher = ({name,age,skills}) => {
   return (
     <div className={styles.teacher}>
       <h3>
         {name},{age} y/o
       </h3>
       <p>{skills.join(",")}</p>
     </div>
   )
 }
 export default Teacher
 