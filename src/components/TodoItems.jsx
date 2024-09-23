
import AppItem from "./AppItem"
import styles from "./TodoItems.module.css"
const TodoItems = ({todoItems,onDelete}) => {
  return (
    <div className={styles.itemsContainer}>
        {todoItems.map((item) => (
            <AppItem todoName={item.name} todoDate={item.dueDate} onDelete={onDelete}/>))}    
    </div>
  )
}

export default TodoItems;
