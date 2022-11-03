import React from "react";
import classes from "./index.jss";

type Props = {
  showAddForm: boolean;
  setShowAddForm: (a: boolean) => void;
  numOfPending: number;
  numOfCompleted: number;
};

const EmpInfoCard = ({ showAddForm, setShowAddForm, numOfPending, numOfCompleted }: Props) => {
  const styles = classes();
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.profile}>
          <img
            src="https://icons.veryicon.com/png/o/miscellaneous/management-system-icon-library/person-15.png"
            alt="Profile"
            height={30}
            width={30}
          />
          <p>Hi, {sessionStorage.getItem('name')}</p>
        </div>
        <div className={styles.performance}>
          <progress value={numOfCompleted} max={numOfPending + numOfCompleted} /><span className={styles.progressvalue}>{(numOfCompleted + numOfPending)!== 0 ? Math.round((numOfCompleted/ (numOfPending + numOfCompleted))* 100) : 0}%</span>
          <p>Your Performance</p>
        </div>
        <div className={styles.addTask}>
          <button
            className={styles.addTaskBtn}
            onClick={() => setShowAddForm(true)}
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};
export default EmpInfoCard;
