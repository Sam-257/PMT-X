import React, { useEffect, useState } from "react";
import EmpInfoCard from "../../components/EmpInfoCard";
import classes from "./index.jss";
import "./index.css";
import { Tabs } from "antd";
import AddForm from "../../components/AddForm";
import PendingTasks from "../../components/PendingTasks";
import CompletedTasks from "../../components/CompletedTasks";
import axios from "axios";

type Props = {};

const Employee = (props: Props) => {
  const styles = classes();
  const [showAddForm, setShowAddForm] = useState(false);
  const [pendingTasks, setPendingTask] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const employeeId = sessionStorage.getItem("id");
  const token = sessionStorage.getItem("token");
  const [numOfPending, setNumOfPending] = useState<number>(0);
  const [numOfCompleted, setNumOfCompleted] = useState<number>(0);

  const getPendingTasks = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/tasks/pending/${employeeId}`, {
        headers: {
          authorization: token,
        },
      })
      .then((response) => {
        setPendingTask(response.data);
        setNumOfPending(response.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getCompletedTasks = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/tasks/completed/${employeeId}`, {
        headers: {
          authorization: token,
        },
      })
      .then((response) => {
        setCompletedTasks(response.data);
        setNumOfCompleted(response.data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPendingTasks();
    getCompletedTasks();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <EmpInfoCard
          showAddForm={showAddForm}
          setShowAddForm={setShowAddForm}
          numOfPending={numOfPending}
          numOfCompleted={numOfCompleted}
        />
      </div>
      {showAddForm ? (
        <div className={styles.form}>
          <AddForm
            showAddForm={showAddForm}
            setShowAddForm={setShowAddForm}
            getPendingTasks={getPendingTasks}
            getCompletedTasks={getCompletedTasks}
          />
        </div>
      ) : (
        <></>
      )}

      <div className={styles.tasks}>
        <Tabs
          defaultActiveKey="1"
          className={styles.tabs}
          items={[
            {
              label: `Pending`,
              key: "1",
              children: (
                <PendingTasks
                  taskData={pendingTasks}
                  getPendingTasks={getPendingTasks}
                  getCompletedTasks={getCompletedTasks}
                />
              ),
            },
            {
              label: `Completed`,
              key: "2",
              children: <CompletedTasks taskData={completedTasks} />,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Employee;
