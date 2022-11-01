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
  const token = sessionStorage.getItem("token");

  const handleChange = (e: any) => {
    setAddFormData({ ...addFormData, [e.target.id]: e.target.value });
  };
  
  const addNewTask = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/tasks/add`, addFormData, {
        headers: {
          authorization: token,
        },
      })
      .then((response) => {
        toast.success('Task Added');
        props.getPendingTasks();
        props.getCompletedTasks();
      })
      .catch((error) => {console.log(error);});
  };
  return (
    <form className={styles.form}>
      <div>
        <label htmlFor="taskName">Task Name: </label>
        <input
          type="text"
          className={styles.nameInput}
          placeholder="Enter Task Name"
          id="taskName"
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="taskDescripton">Task Description: </label>
        <input
          type="text"
          className={styles.descInput}
          placeholder="Enter Task Description"
          id="description"
          onChange={handleChange}
        />
      </div>
      <div className={styles.addTask}>
        <button onClick={addNewTask}>Add</button>
      </div>
      <div className={styles.closeTask}>
        <img
          onClick={() => props.setShowAddForm(false)}
          src="https://cdn.icon-icons.com/icons2/2550/PNG/512/x_circle_icon_152490.png"
          alt="cross"
          width={32}
          height={32}
        />
      </div>
    </form>
  );
};

export default AddForm;
