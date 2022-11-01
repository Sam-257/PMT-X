import React from "react";
import classes from "./CardFront.jss";

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

export default function CardFront({ employeeData }: Props) {
  const styles = classes();
  return (
    <>
      <img
        className={styles["card-img"]}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDGQO5-8CPA9Hzl5_wLkAf6VtlMw52q7IwRw&usqp=CAU"
        alt="employee-profile"
      ></img>
      <div>Employee ID: {employeeData.id}</div>
      <div>Employee Name: {employeeData.name}</div>
    </>
  );
}
