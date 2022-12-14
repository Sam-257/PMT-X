import React, { useState } from "react";
import CardBack from "../../components/CardBack";
import CardFront from "../../components/CardFront";
import classes from "./index.jss";
import { useEffect } from "react";
import axios from "axios";

type ITeamMember = {
  userId: number;
  userName: string;
  noOfPendingtask: number;
  noOfCompletedTask: number;
};

export default function ManagerPage() {
  const styles = classes();

  const managerName = sessionStorage.getItem("name");
  const token = sessionStorage.getItem("token");

  const [teamData, setTeamData] = useState<ITeamMember[]>([]);

  const getTeamData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/teams/employees/${sessionStorage.getItem('teamId')}`, {
        headers: {
          authorization: token,
        },
      })
      .then((response) => {
        setTeamData(response.data);
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  useEffect(() => {
    getTeamData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.content}>
              <div className={styles.profile}>
                <img
                  src={require('./person.png')}
                  alt="Profile"
                  height={30}
                  width={30}
                />
                <p>Hi, {managerName}</p>
              </div>
              <div className={styles.profile}>
                <img
                  id="groupIcon"
                  src={require('./team.png')}
                  alt="Profile"
                />
                <p>My Team</p>
              </div>
              <div className={styles.teamInfo}>
                <p>Team Name: PMT-X</p>
                <p>Team Size: {teamData.length}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.employeeCardContainer}>
          {teamData
            ? teamData?.map((item) => (
                <div key={item.userId} className={styles["flip-card"]}>
                  <div className={styles["flip-card-inner"]}>
                    <div className={styles["flip-card-front"]}>
                      <CardFront employeeData={item} />
                    </div>
                    <div className={styles["flip-card-back"]}>
                      <CardBack employeeData={item} />
                    </div>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
}
