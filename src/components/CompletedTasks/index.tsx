import classes from "./index.jss";
import '../../pages/Employee/index.css';
import EmpTaskCard from "../../components/EmpTaskCard";

type Task = {
  taskName: string,
  description: string,
  taskId: number,
  status: string
}

type Props ={
  taskData: Task[];
}

const CompletedTasks = ({taskData}: Props) => {
  const styles = classes();
  return (
    <div className={styles.completedTaskContainer}>
      {taskData
        .filter((item) => item.status === 'COMPLETED')
        .map((item) => (
          <EmpTaskCard name={item.taskName} desc={item.description} key={item.taskId} />
        ))}
    </div>
  );
};

export default CompletedTasks;
