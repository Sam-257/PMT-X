import React from "react";
import classes from "./CardBack.jss";

type Props = {
  employeeData: {
    id: number;
    name: string;
    email: string;
    password?: string;
    role?: string;
    image?: string;
    pending?: number;
    completed?: number;
  };
};

export default function CardBack({ employeeData }: Props) {
  const styles = classes();
  return (
    <>
      <div className={styles.flex1}>
        <div className={styles.flex2}>
          <div className={styles.parent}>
            <p id="num">
              {/* {employeeData.completed}/{employeeData.pending + employeeData.completed} */}
              2/100
            </p>
            <p id="txt">Completed</p>
          </div>
          <div className={styles.parent}>
            <p id="num">
              {/* {employeeData.pending}/{employeeData.pending + employeeData.completed} */}
              1/100
            </p>
            <p id="txt">In Progress</p>
          </div>
        </div>
        <div>
          <progress
            // value={employeeData.completed}
            // max={employeeData.pending + employeeData.completed}
            value={10}
            max={100}
          ></progress>
          <span className={styles.progressvalue}>
            {/* {(employeeData.completed / (employeeData.completed + employeeData.pending))*100}% */}
            10%
          </span>
          <p>Performance</p>
        </div>
      </div>
    </>
  );
}
