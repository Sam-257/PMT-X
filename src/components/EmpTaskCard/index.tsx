import React from 'react'
import classes from './index.jss'

type Props = {
  name: string,
  desc: string,
}

const EmpTaskCard = ({name, desc}: Props) => {
  const styles = classes();
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div  className={styles.name}>
        {name}
        </div>
        <div className={styles.desc}>
        {desc}
        </div>
      </div>
    </div>
  )
}

export default EmpTaskCard