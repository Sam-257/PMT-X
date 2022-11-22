import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import classes from "./index.jss";

type Props = {
  showAddForm: boolean;
  setShowAddForm: (a: boolean) => void;
  getPendingTasks: () => void;
  getCompletedTasks: () => void;
};

const AddForm = (props: Props) => {
  const styles = classes();
  const [addFormData, setAddFormData] = useState({
    taskName: "",
    description: "",
    userId: sessionStorage.getItem("id"),
  });
  const [addFormErrors, setAddFormErrors] = useState({
    taskName: "",
    description: "",
  });

  const token = sessionStorage.getItem("token");

  const handleChange = (e: any) => {
    setAddFormData({ ...addFormData, [e.target.id]: e.target.value });
    e.target.value === ""
      ? e.target.id === "taskName"
        ? setAddFormErrors({
            ...addFormErrors,
            [e.target.id]: `Task name is required.`,
          })
        : setAddFormErrors({
            ...addFormErrors,
            [e.target.id]: `Task description is required.`,
          })
      : setAddFormErrors({ ...addFormErrors, [e.target.id]: "" });
  };

  const addNewTask = () => {
    if(addFormData.taskName === "" || addFormData.description === ""){
      if(addFormData.taskName === "") setAddFormErrors(prevErrors => {return {...prevErrors, taskName: 'Task name is required.'}})
      if(addFormData.description === "") setAddFormErrors(prevErrors => {return {...prevErrors, description: 'Task description is required.'}})
      return;
    }
    axios
      .post(`${process.env.REACT_APP_API_URL}/tasks/add`, addFormData, {
        headers: {
          authorization: token,
        },
      })
      .then(() => {
        toast.success("Task Added", {
          toastId: "success",
        });
        props.getPendingTasks();
        props.getCompletedTasks();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form className={styles.form}>
      <div>
        <label htmlFor="taskName">Name: </label>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            className={styles.nameInput}
            placeholder="Enter task name"
            id="taskName"
            onChange={handleChange}
          />
          <span>{addFormErrors.taskName}</span>
        </div>
      </div>
      <div>
        <label htmlFor="taskDescripton">Description: </label>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            className={styles.descInput}
            placeholder="Enter task description"
            id="description"
            onChange={handleChange}
          />
          <span>{addFormErrors.description}</span>
        </div>
      </div>
      <div className={styles.addTask}>
        <button onClick={addNewTask}>Add</button>
      </div>
      <div className={styles.closeTask}>
        <img
          onClick={() => props.setShowAddForm(false)}
          src={require('./cross.png')}
          alt="cross"
          width={32}
          height={32}
        />
      </div>
    </form>
  );
};

export default AddForm;
