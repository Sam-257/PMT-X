import React from "react";
import classes from "./CardBack.jss";

type Props = {
  employeeData: {
    userId: number;
    userName: string;
    noOfPendingtask: number;
    noOfCompletedTask: number;
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
              {employeeData.noOfCompletedTask}/{employeeData.noOfPendingtask + employeeData.noOfCompletedTask}
              
            </p>
            <p id="txt">Completed</p>
          </div>
          <div className={styles.parent}>
            <p id="num">
              {employeeData.noOfPendingtask}/{employeeData.noOfPendingtask + employeeData.noOfCompletedTask}
            </p>
            <p id="txt">In Progress</p>
          </div>
        </div>
        <div>
          <progress
            value={employeeData.noOfCompletedTask}
            max={employeeData.noOfPendingtask + employeeData.noOfCompletedTask}
            ></progress>
          <span className={styles.progressvalue}>
            {(employeeData.noOfCompletedTask + employeeData.noOfPendingtask) ===0 ? 0 :(employeeData.noOfCompletedTask / (employeeData.noOfCompletedTask + employeeData.noOfPendingtask))*100}%
          </span>
          <p>Performance</p>
        </div>
      </div>
    </>
  );
}
