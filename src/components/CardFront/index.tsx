import React from "react";
import classes from "./index.jss";

type Props = {
  employeeData: {
    userId: number;
    userName: string;
    noOfPendingtask: number;
    noOfCompletedTask: number;
  };
};

export default function CardFront({ employeeData }: Props) {
  const styles = classes();
  return (
    <>
      <img
        className={styles["card-img"]}
        src={require('./profile.png')}
        alt="employee-profile"
      ></img>
      <div>Employee ID: {employeeData.userId}</div>
      <div>Employee Name: {employeeData.userName}</div>
    </>
  );
}
