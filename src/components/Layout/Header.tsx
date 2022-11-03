import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import classes from './Header.jss'

type Props = {}

const Header = (props: Props) => {
  const styles = classes();
  const navigate = useNavigate();

  const deleteUser=()=>{
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('role');
    toast.info('Logged Out successfully')
    navigate('/');
  }

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logoContainer}>
          <p className={styles.logo}>PMT-X</p>
        </div>
        <button onClick={deleteUser} className={styles.logOutBtn}>
          Log Out
        </button>
      </div>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  )
}

export default Header