import { Collapse } from "antd";
import classes from "./index.jss";
import "../../pages/Employee/index.css";
import axios from "axios";

const { Panel } = Collapse;

type Task = {
  taskName: string;
  description: string;
  taskId: number;
  status: string;
};

type Props = {
  taskData: Task[];
  getPendingTasks: () => void;
  getCompletedTasks: () => void;
};

const PendingTasks = ({
  taskData,
  getPendingTasks,
  getCompletedTasks,
}: Props) => {
  const styles = classes();
  const token = sessionStorage.getItem("token");

  const changeStatus = (taskId: number) => {
    axios.put(`${process.env.REACT_APP_API_URL}/tasks/${taskId}`,{}, {headers: {"authorization" : token}})
      .then((res) => {
        getPendingTasks();
        getCompletedTasks();
      })
      .catch((err: any) => console.log(err));
  };

  return (
    <Collapse>
      {taskData
        .filter((item) => item.status==='PENDING')
        .map((item, index) => (
          <Panel header={item.taskName} key={item.taskId}>
            <div className={styles.accordionContent}>
              <p>{item.description}</p>
              <button
                className={styles.completedBtn}
                onClick={() => changeStatus(item.taskId)}
              >
                Completed!!
              </button>
            </div>
          </Panel>
        ))}
    </Collapse>
  );
};

export default PendingTasks;
